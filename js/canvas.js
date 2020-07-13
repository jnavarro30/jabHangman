const Canvas = (_ => {
    // variables
    let livesLeft = null,
        canvas, ctx;

    const init = _ => {
        canvas = document.querySelector('.hangman__canvas');
        ctx = canvas.getContext('2d');
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'white';
        base();
   }

   const draw = (startX, startY, endX, endY) => {
       ctx.moveTo(startX, startY);
       ctx.lineTo(endX, endY);
       ctx.stroke();
   }

   const base = _ => {
       line1();
       line2();
       line3();
   }

   const line1 =_ => draw(0, 145, 150, 145);
   const line2 =_ => draw(10, 0, 10, 300);
   const line3 =_ => draw(0, 5, 70, 5);

   const rope =_ => draw(60, 5, 60, 15);
   const head = _ => {
       ctx.beginPath();
       ctx.arc(60, 25, 10, 0, Math.PI * 2);
       ctx.stroke();
   }
   const torso = _ => draw(60, 36, 60, 70);
   const rightArm = _ => draw(60, 46, 100, 50);
   const leftArm = _ => draw(60, 46, 20, 50);
   const rightLeg = _ => draw(60, 70, 100, 100);
   const leftLeg = _ => draw(60, 70, 20, 100);

   let parts = [leftLeg, rightLeg, leftArm, rightArm, torso, head, rope];

   const render = _ => {
       parts[livesLeft]();
   }

   const setLives = newLives => {
       livesLeft = newLives;
      render();
   }

    return {
        init,
        setLives
    }
})();

export default Canvas;