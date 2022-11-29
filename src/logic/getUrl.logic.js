export const getUrl = async url => {
  try {
    if (!url) return { status: 404, data: { msg: 'URL not found' } }

    console.log(url)

    return { status: 200, data: { url } }
  } catch (err) {
    return { status: 500, data: { msg: 'generic() error', error: err } }
  }
}
