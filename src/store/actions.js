import {reqData} from "../api/index"
import {RECEIVE_DATA} from "./mutations-types"

export default {
  async getData ({commit}) {
    const result = await reqData()
    if (result) {
      const data =result
      commit(RECEIVE_DATA, {data})
    }
  }
}



