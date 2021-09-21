(function() {

  d3.select("#blocks-step-one")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/population-all-1.png")
    })

  d3.select("#blocks-step-two")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/population-zurich-2.png")
    })

  d3.select("#blocks-step-three")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/population-miami-3.png")
    })
      d3.select("#blocks-step-four")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/population-miami-3.png")
    })

})()