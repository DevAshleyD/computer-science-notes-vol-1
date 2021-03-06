(function() {

  d3.select("#step-two")
    .on('stepin', function () {
      d3.select("#columbia-image")
        .attr("src", "images/columbia-expanded.png")
    })

  d3.select("#step-one")
    .on('stepin', function () {
      d3.select("#columbia-image")
        .attr("src", "images/columbia-original.png")
    })

  d3.select("#blocks-step-one")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/blocks-nothing.png")
    })

  d3.select("#blocks-step-two")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/blocks-red.png")
    })

  d3.select("#blocks-step-three")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/blocks-red-yellow.png")
    })

  d3.select("#blocks-step-four")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/blocks-all.png")
    })

})()