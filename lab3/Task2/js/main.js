document.addEventListener('DOMContentLoaded', ()=>{
    const width=600;
    const height=600;
    const svg=d3.select('svg')
        .attr("width", width)
        .attr("height", height);


})

let clearImg = ()=>{
    const svg=d3.select('svg')
    svg.selectAll('*').remove()
}

let runAnimation=(dataForm) =>{
    const svg= d3.select('svg');
    let pict=drawSmile(svg);
    /*if(!checkBoxFlagSecond){
        pict.attr('transform',
            `translate(${dataForm.cx.value}, ${dataForm.cy.value})
            rotate(${dataForm.angle.value})
            scale(${dataForm.scaleX.value}, ${dataForm.scaleY.value})`)
            .transition(svg)
            .duration(6000)
            .ease(eval('d3.ease'+dataForm.selectTypeAnimation.value))
            .attr('transform',
                `translate(${dataForm.cx_finish.value}, ${dataForm.cy_finish.value})
      rotate(${dataForm.angleTo.value})
      scale(${dataForm.scaleXTo.value}, ${dataForm.scaleYTo.value})`)
    } else {*/
    let path=drawPath();
    pict.attr('transform',
        `translate(300, 300)
            scale(${dataForm.scaleX.value}, ${dataForm.scaleY.value})`)
        .transition(svg)
        .ease(eval('d3.ease'+dataForm.selectTypeAnimation.value))
        .duration(Number(dataForm.timeAnimation.value))
        .ease(eval('d3.ease'+dataForm.selectTypeAnimation.value))
        .attr('transform',
            `scale(${dataForm.scaleXTo.value}, ${dataForm.scaleYTo.value})`)
        .attrTween('transform', translateAlong(path.node()));
    /*pict.transition()
        .ease(eval('d3.ease'+dataForm.selectTypeAnimation.value))
        .duration(Number(dataForm.timeAnimation.value))
        .attrTween('transform', translateAlong(path.node()));*/

}