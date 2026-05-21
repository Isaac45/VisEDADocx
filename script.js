
(function(){
  function escapeHtml(s){return s.replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  document.querySelectorAll('pre').forEach(function(pre, index){
    if(pre.parentElement && pre.parentElement.classList.contains('code-card')) return;
    var code = pre.querySelector('code');
    if(!code) return;
    var wrapper = document.createElement('div');
    wrapper.className = 'code-card';
    var lang = 'code';
    if(code.className){
      var m = code.className.match(/language-([a-zA-Z0-9_+-]+)/);
      if(m) lang = m[1];
    }
    var header = document.createElement('div');
    header.className = 'code-header';
    var label = document.createElement('span');
    label.textContent = lang;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.addEventListener('click', async function(){
      var text = code.innerText;
      try{
        await navigator.clipboard.writeText(text);
        btn.textContent = 'Copied';
        btn.classList.add('copied');
        setTimeout(function(){btn.textContent='Copy';btn.classList.remove('copied');},1600);
      }catch(e){
        var area=document.createElement('textarea');
        area.value=text; document.body.appendChild(area); area.select(); document.execCommand('copy'); document.body.removeChild(area);
        btn.textContent='Copied'; setTimeout(function(){btn.textContent='Copy';},1600);
      }
    });
    header.appendChild(label); header.appendChild(btn);
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(header);
    wrapper.appendChild(pre);
  });
})();
