(function() {

  d3.select("#blocks-step-one")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/hibakusha-small-all.png")
    })

  d3.select("#blocks-step-two")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/hibakusha-small-01.png")
    })

  d3.select("#blocks-step-three")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/hibakusha-small-02.png")
    })

  d3.select("#blocks-step-four")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/hibakusha-small-03.png")
    })

   d3.select("#blocks-step-five")
    .on('stepin', function () {
      d3.select("#blocks")
        .attr("src", "images/hibakusha-small-04.png")
    })

})()