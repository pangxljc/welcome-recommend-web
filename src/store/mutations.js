import Vue from "vue"
import {RECEIVE_DATA} from "./mutations-types"

export default {
  [RECEIVE_DATA] (state, {data}) {
    state.data = data
  }
}
