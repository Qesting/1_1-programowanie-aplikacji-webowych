(function () {
  document.getElementById('ex1_button')?.addEventListener('click', () => {
    const str = Array(10).fill(0).map((_, index) => index.toString()).join(',')
    document.getElementById('ex1_content').textContent = str
  })
})();