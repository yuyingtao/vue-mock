import { post } from './api.js';

class Regist{
    getTree(parms){
        return post('',parms)
    }
}

export default new Regist()