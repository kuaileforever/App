import {AsyncStorage} from 'react-native';

export default class localStorage {
    // 获取存储的item
    static getItem(key) {
        return AsyncStorage.getItem(key).then((value)=>{
            const jsonValue = JSON.parse(value);
            return jsonValue;
        });
    }

    // 设置item
    static setItem(key, value) {
        if (localStorage.getItem(key) !== undefined){
            localStorage.removeItem(key);
        }
        AsyncStorage.setItem(key,value.toString(),(error)=>{
            if (error){
                console.log('error:setItem-'+key +'-' + value);
            }
        });
    }




    // 删除item
    static removeItem(key){
        AsyncStorage.removeItem(key,(error)=>{
            if (error){
                console.log('error:removeItem-'+key);
            }
        });
    }
}