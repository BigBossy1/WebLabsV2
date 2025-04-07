function createSpiralPath() {
  const a=10;//Начальный радиус
  const b=10;//плотность спирали
  const centerX=300;
  const centerY=300;
  const steps=1000;//количество точек
  const rotationAngle=0;//начальный угол поворота

  const path = [];
  const thetaMax = 2 * Math.PI * 5;  // максимальный угол (3 полных оборота)
  const thetaStep = thetaMax / steps;

  for (let i = 0; i <= steps; i++) {
    const theta = i * thetaStep;
    const radius = a + b * theta;
    const x = centerX + radius * Math.cos(theta + rotationAngle);
    const y = centerY + radius * Math.sin(theta + rotationAngle);
    path.push({x:x, y:y});
  }

  return path;
}

let drawPath =(typePath) => {
  const svg=d3.select('svg');
  // создаем массив точек пути в зависимости от параметра
  const dataPoints = createSpiralPath();
  const line = d3.line()
    .x((d) => d.x)
    .y((d) => d.y);
  // создаем путь на основе массива точек
  const path = svg.append('path')
    .attr('d', line(dataPoints))
    .attr('stroke', 'black')
    .attr('fill', 'none');


  return path;
}


function translateAlong(path){
  const length = path.getTotalLength();
  const diffX=Math.trunc((document.getElementById('scaleXTo').value-document.getElementById('scaleX').value));
  const diffY=Math.trunc((document.getElementById('scaleYTo').value-document.getElementById('scaleY').value));


  return function (){
    return function (t){
      const  {x, y} = path.getPointAtLength(t*length);
      const xScale=Number(document.getElementById('scaleX').value)+diffX*t;
      const yScale=Number(document.getElementById('scaleY').value)+diffY*t;
      return `translate(${x},${y}) scale(${xScale}, ${yScale})`;
    }
  }
}
