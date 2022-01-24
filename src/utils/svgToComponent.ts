import { defineComponent, openBlock, createElementBlock, createElementVNode } from 'vue';

const _export_sfc = (sfc: any, props: any) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const svgToComponent = (svgRaw: string, name: string) => {
  const svgWrapper = document.createElement('i')
  svgWrapper.innerHTML = svgRaw
  const svgEle = svgWrapper.querySelector('svg')
  const pathsEle = svgEle?.querySelectorAll('path')

  const _sfc_main = defineComponent({
    name: name
  });

  const svgProps = {
    class: svgEle?.getAttribute('class') || 'icon',
    width: svgEle?.getAttribute('width') || '200',
    height: svgEle?.getAttribute('height') || '200',
    viewBox: svgEle?.getAttribute('viewBox') || '0 0 1024 1024',
    xmlns: svgEle?.getAttribute('xmlns') || 'http://www.w3.org/2000/svg'
  };

  const paths = !pathsEle || !pathsEle.length ? [] : Array.from(pathsEle).map(item => {
    return createElementVNode('path', {
      fill: 'currentColor',
      d: item.getAttribute('d')
    }, null, -1)
  });

  function _sfc_render(_ctx: any, _cache: any, $props: any, $setup: any, $data: any, $options: any) {
    return openBlock(), createElementBlock('svg', svgProps, paths);
  }
  return _export_sfc(_sfc_main, [['render', _sfc_render]]);
}

export default svgToComponent
