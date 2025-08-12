export function UseCaptcha()

{

    const code = `${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)}`;

    return code;

}