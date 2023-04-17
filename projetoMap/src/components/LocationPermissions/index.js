import { PermissionsAndroid } from "react-native";

export const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Permissão de Localização',
                message:
                    'Este aplicativo precisa acessar sua localização.',
                buttonNeutral: 'Pergunte-me depois',
                buttonNegative: 'Cancelar',
                buttonPositive: 'OK',
            },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Permissão concedida');
        } else {
            console.log('Permissão negada');
        }

    } catch (erro) {
        console.warn(erro);
    }
}
