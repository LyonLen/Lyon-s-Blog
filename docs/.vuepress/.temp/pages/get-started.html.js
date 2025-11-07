import comp from "D:/blog_proj/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"博客免责说明\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"get-started.md\",\"excerpt\":\"\\n<ul>\\n<li>本博客主要是为了记录工作、学习中遇到的问题，可能由于本人技术有限，内容难免有纰漏，一切内容仅供参考。</li>\\n<li>本博客中转载文章会写明来源，感谢原作者的辛苦写作，如果有异议，及时联系我处理，谢谢！</li>\\n<li>本人博客所有文章纯属学习之用，不涉及商业利益。如有不合适引用，请私信我删除！</li>\\n<li>本人不保证文章中的内容完全正确。</li>\\n<li>对于其中的错误之处，欢迎网友积极指出，本人一定听取意见并进行合理改正。</li>\\n<li>本博客所有文字、图片等版权归本人所有，转载请注明出处。</li>\\n<li>本博客部分内容来源于互联网，如有侵权请联系本人删除。</li>\\n</ul>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
