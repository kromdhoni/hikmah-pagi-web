function toast(msg, isError){
  const el=document.createElement('div');
  el.className='toast';
  if(isError) el.style.background='#EF4444';
  el.textContent=msg;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),3000);
}
async function api(path, opts){
  const res=await fetch(path, opts);
  const data=await res.json().catch(()=>({}));
  if(!res.ok) throw new Error(data.error||'Request failed');
  return data;
}
