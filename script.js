 // small helper: animate circuit paths slightly on load
    document.addEventListener('DOMContentLoaded', ()=>{
      document.querySelectorAll('.circuit-path').forEach((p,i)=>{
        const len = p.getTotalLength();
        p.style.strokeDasharray = len;
        p.style.strokeDashoffset = len;
        setTimeout(()=>{ p.style.transition = 'stroke-dashoffset 1.6s ease-out'; p.style.strokeDashoffset = '0'; }, 200 + i*200);
      })
    })

    function sendMessage(){
      const form = document.getElementById('contactForm');
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const msg = form.message.value.trim();
      const status = document.getElementById('formStatus');
      if(!name || !email || !msg){ status.textContent = 'Please fill all fields to send a message.'; return; }
      // lightweight fake-send (no backend). Instruct user how to connect.
      status.textContent = 'Message composed locally. To actually send messages, I can help wire this form to email using Formspree or to a simple server. Tell me which option you prefer.';
      form.reset();
    }