import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import HttpServer, { Server } from 'react-native-http-server';
import * as FileSystem from 'expo-file-system';
import * as Network from 'expo-network';

// 定义组件状态的类型
type DeviceState = {
    server: Server | null;
    ipAddress: string;
    serverPort: number;
};

export default function Share() {
    const [state, setState] = useState<DeviceState>({
        server: null,
        ipAddress: '',
        serverPort: 8080,
    });

    // 获取设备 IP 地址
    useEffect(() => {
        const getIpAddress = async () => {
            const networkState = await Network.getNetworkStateAsync();
            if (networkState.isConnected) {
                const ip = await Network.getIpAddressAsync();
                setState((prevState) => ({ ...prevState, ipAddress: ip }));
            }
        };

        getIpAddress();

        return () => {
            if (state.server) {
                state.server.stop();
            }
        };
    }, [state.server]);

    // 启动 HTTP 服务器
    const startServer = () => {
        const newServer = new HttpServer();

        newServer.start(state.serverPort, async (request, response) => {
            console.log('请求:', request.url);

            if (request.method === 'GET' && request.url === '/') {
                // 显示文件上传页面
                response.write(`
          <html>
          <body>
            <h1>WiFi 传书</h1>
            <form ref='uploadForm' id='uploadForm' action='/upload' method='post' encType='multipart/form-data'>
              <input type='file' name='file' />
              <input type='submit' value='上传文件' />
            </form>
          </body>
          </html>
        `);
                response.end();
            } else if (request.method === 'POST' && request.url === '/upload') {
                // 处理文件上传
                const fileUri = FileSystem.documentDirectory + 'uploaded_file';
                const fileStream = FileSystem.createWriteStream(fileUri);
                request.pipe(fileStream);
                request.on('end', () => {
                    response.write('文件上传成功');
                    response.end();
                    Alert.alert('文件已上传', fileUri);
                });
            } else {
                response.write('无效的请求');
                response.end();
            }
        });

        setState((prevState) => ({ ...prevState, server: newServer }));
        Alert.alert('服务器已启动', `请在浏览器中访问: http://${state.ipAddress}:${state.serverPort}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>IP 地址: {state.ipAddress}</Text>
            <Button title="启动 WiFi 传书服务器" onPress={startServer} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
});