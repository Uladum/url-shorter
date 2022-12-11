export const internalServerError = (method: string, err: any) => {
  return { status: 500, data: { method, err } }
}

export const notFound = (data: string) => {
  return { status: 404, data }
}

export const ok = (data: any) => {
  return { status: 200, data }
}

export const created = (data: any) => {
  return { status: 201, data }
}
