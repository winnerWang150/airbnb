import requestHttp from ".."

export function fetchEntireList (offset = 0, size = 20) {
  return requestHttp.get({
    url: '/entire/list',
    params: {
      offset,
      size
    }
  })
}

