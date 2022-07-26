export const speakDetailsOnIphone = ({abilities, name}) =>{
    
    const voices = window.speechSynthesis.getVoices();

    const msg = new SpeechSynthesisUtterance();
    msg.voice = voices.filter(voice => voice.lang === 'es-MX')[0];
    msg.pitch = 1;
    msg.rate = 1;
    msg.volume = 1;
    msg.text = `El es ${name}, Habilidades: ${abilities?.map(a=>a.ability.name)}`;

    try{
        window.speechSynthesis.speak(msg);
    }catch(err){
        alert(err);
    }
}