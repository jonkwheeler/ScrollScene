export const errorLog = (nameSpace, msg) => {
  throw new Error(`${nameSpace} -> ${msg}`)
}
