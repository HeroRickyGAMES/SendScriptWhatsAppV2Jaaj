async function enviarScript(scriptText){

    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
    textarea = main.querySelector(`div[contenteditable="true"]`)
    
    if(!textarea) throw new Error("Não há uma conversa aberta")
    
    for(const line of lines){
        console.log(line)
    
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));
    
        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);
        
        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }
    
    return lines.length;
}

enviarScript(`

Eai bundão?

Gatinho

Ta afim de trabalhar?

Não cara! Não não pode não

Tem que trabalhar depois a gente brinca um pouco né?

Dá uma pegadinha e dps vc vai relaxar...

Ain eu não resisto vain...

Aaaaa, vai da o cu pra mim vai porra, vai porra?

Eu vou dar o cu pra vc vain

Eu vou deixar o oco no seu rabo

Ooooooo, cu, cuu.
Ai que delicia

Ain que delica, ai que gostoso, ai que delicia.

Pika gostosa, grande e gostosa.

Ain que gostoso

Aaaai

Come eu sei que você gosta de comer não gosta come.


Aaai

Aii

Aaai

Aaaaai caralho

Ai

Ai

Ai que gostoso cara

Porra que delicia cara

Ain.

Era essa peça que vc queria?

Era essa mesma, mais não vou por essa porra também não

Coomo assim você não vai por essa peça tive tanto trabalho para por essa peça e...

E a demora?

Que demora?

Agora eu quero relaxar

Coomo assim você quer relaxar em que sentido?

Mexendo com vc vem cá vem!

Não!

Assim que eu gosto, trabalhando e relaxando

Queimando a rosquinha ai que delicia!

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
