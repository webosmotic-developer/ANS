import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class DeviceService {

    constructor(private _http: HttpClient) {
    }

    /**
     * Get device by id.
     * */
    getTypes() {
        return this._http.get(environment.API_URL + `node/types`);
    }

    getType(typeId) {
        return this._http.get(environment.API_URL + `node/types/${typeId}`);
    }

    /**
     * Get devices.
     * */
    getDevices(query?: any) {
        let url = environment.API_URL + `node/devices?perPage=0`;
        let headers;
        if (query) {
            headers = new HttpHeaders().set('x-pre-api-version', '4');
            url = url + '&q=' + encodeURIComponent(query);
        } else {
            headers = new HttpHeaders().set('x-pre-api-version', '3');
        }
        return this._http.get(url, {headers});
    }

    /**
     * Get device by id.
     * */
    getDevice(deviceId) {
        return this._http.get(environment.API_URL + `node/devices/${deviceId}`);
    }


    /**
     * Get device async.
     * */
    async getAsyncDevice(deviceId): Promise<any> {
        const url = environment.API_URL + `node/devices/${deviceId}`
        return await this._http.get(url, {}).toPromise()
            .then(async (response: any) => {
                return response;
            })
            .catch(async (error) => {
            });
    }
    /**
     * Get device ghost.
     * */
    async getDeviceGhosts(deviceId): Promise<any> {
        const url = environment.API_URL + `node/devices/${deviceId}/ghosts`;
        return await this._http.get(url, {}).toPromise()
            .then(async (response: any) => {
                return response;
            })
            .catch(async (error) => {
            });
    }


    getDeviceAttributes(deviceId) {
        return this._http.get(environment.API_URL + `node/devices/${deviceId}/ghosts`);
    }

    /**
     * modify device ghost.
     * */
    async modifyDeviceGhost(deviceId, payload): Promise<any> {
        const url = environment.API_URL + `node/devices/${deviceId}/ghosts`;
        return await this._http.patch(url, payload).toPromise()
            .then(async (response: any) => {
                return response;
            })
            .catch(async (error) => {
            });
    }

    /**
     * Add device to cluster.
     * */
    async addDeviceToCluster(deviceId, clusterId): Promise<any> {
        const url = environment.API_URL + `node/clusters/${clusterId}/devices/${deviceId}`;
        return await this._http.put(url, {}).toPromise()
            .then(async (response: any) => {
                return response;
            })
            .catch(async (error) => {
            });
    }

    /**
     * Remove device from cluster.
     * */
    async removeDeviceFromCluster(deviceId, clusterId): Promise<any> {
        const url = environment.API_URL + `node/clusters/${clusterId}/devices/${deviceId}`;
        return await this._http.delete(url).toPromise()
            .then(async (response: any) => {
                return response;
            })
            .catch(async (error) => {
            });
    }

    async getDeviceComponents(deviceId): Promise<any> {
        const url = environment.API_URL + `node/devices/${deviceId}/components?perPage=0`;
        return await this._http.get(url, {}).toPromise()
            .then(async (response: any) => {
                return response;
            })
            .catch(async (error) => {
            });
    }

    async getComponentGhosts(deviceId, componentId): Promise<any> {
        const url = environment.API_URL + `node/devices/${deviceId}/components/${componentId}/ghosts`;
        return await this._http.get(url, {}).toPromise()
            .then(async (response: any) => {
                return response;
            })
            .catch(async (error) => {
            });
    }

    async modifyComponent(deviceId, componentId, payload): Promise<any> {
        const url = environment.API_URL + `node/devices/${deviceId}/components/${componentId}`;
        return await this._http.patch(url, payload).toPromise()
            .then(async (response: any) => {
                return response;
            })
            .catch(async (error) => {
            });
    }

    enableComponent(deviceId, body) {
        const url = environment.API_URL + `node/devices/${deviceId}/components`;
        return this._http.post(url, body);
    }

    disableComponent(deviceId, componentId) {
        const url = environment.API_URL + `node/devices/${deviceId}/components/${componentId}`;
        return this._http.delete(url);
    }
}
