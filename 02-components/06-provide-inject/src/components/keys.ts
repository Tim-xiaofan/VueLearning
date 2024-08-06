// keys.js
import type { InjectionKey } from 'vue';
// 为 provide 标注类型
const keyStr = Symbol() as InjectionKey<string>;
const myInjectionKey = Symbol();
export {keyStr, myInjectionKey}