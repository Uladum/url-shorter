export const getUrl = async url => {
  try {
    console.log(url)

    return { status: 200, data: { url } }
  } catch (err) {
    return { status: 500, data: { msg: 'generic() error', error: err } }
  }
}
