const numThousand = (num: (string|number)) => {
  if (num == '' || Number.isNaN(num)) {
    return ''
  }
  return Number(num).toLocaleString()
}

export {
  numThousand
}