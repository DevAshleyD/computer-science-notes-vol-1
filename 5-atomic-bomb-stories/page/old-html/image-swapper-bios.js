(function() {

  d3.select("#blocks-step-one-bios")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/bios-all.png")
    })

  d3.select("#blocks-step-two-bios")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/bios-0.png")
    })

  d3.select("#blocks-step-three-bios")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/bios-5.png")
    })
      d3.select("#blocks-step-four-bios")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/bios-15.png")
    })

})()