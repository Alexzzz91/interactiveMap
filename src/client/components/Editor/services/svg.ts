// @ts-ignore
const saveOIAttr = (svgContent) => {
  const result = svgContent.match(new RegExp('oi:animations="(.*?)"')) ?? {}
  return result['0'] ?? ''
}

// @ts-ignore
const restoreOIAttr = (svgContent, attributes) => {
  if (!attributes) return svgContent
  const oiNameSpace = 'xmlns:oi="http://oimotion.optimistik.fr/namespace/svg/OIdata"'
  return svgContent.replace('<svg', `<svg ${oiNameSpace} ${attributes}`)
}

export { 
  saveOIAttr,
  restoreOIAttr 
}
