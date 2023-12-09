export type LocalDataBaseOptions = {
  key:string,
  initData:()=>Record<string, unknown>
}
export type TBaseType = string | number | boolean | null | undefined
