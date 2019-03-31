$(document).ready(function() {
  var items = [{
    "name": "Chair",
    "model": "models/gltf/chair.glb",
    "type": "1",
    "image": "models/thumbnails_new/chair.png",
    "format": "gltf"
  }, {
    "name": "Doorway",
    "model": "models/gltf/doorway.glb",
    "type": "3",
    "image": "models/thumbnails_new/doorway.png",
    "format": "gltf"
  }, {
    "name": "Front doorway",
    "model": "models/gltf/doorwayFront.glb",
    "type": "3",
    "image": "models/thumbnails_new/doorwayFront.png",
    "format": "gltf"
  }, {
    "name": "Open Doorway",
    "model": "models/gltf/doorwayOpen.glb",
    "type": "3",
    "image": "models/thumbnails_new/doorwayOpen.png",
    "format": "gltf"
  }, {
    "name": "Dryer",
    "model": "models/gltf/dryer.glb",
    "type": "2",
    "image": "models/thumbnails_new/dryer.png",
    "format": "gltf"
  }, {
    "name": "Large Kitchen Hood",
    "model": "models/gltf/hoodLarge.glb",
    "type": "2",
    "image": "models/thumbnails_new/hoodLarge.png",
    "format": "gltf"
  }, {
    "name": "Stoolbar",
    "model": "models/gltf/stoolBar.glb",
    "type": "1",
    "image": "models/thumbnails_new/stoolBar.png",
    "format": "gltf"
  }, {
    "name": "Stoolbarsquare",
    "model": "models/gltf/stoolBarSquare.glb",
    "type": "1",
    "image": "models/thumbnails_new/stoolBarSquare.png",
    "format": "gltf"
  }, {
    "name": "Table",
    "model": "models/gltf/table.glb",
    "type": "1",
    "image": "models/thumbnails_new/table.png",
    "format": "gltf"
  }, {
    "name": "Modern Kitchen Hood",
    "model": "models/gltf/hoodModern.glb",
    "type": "2",
    "image": "models/thumbnails_new/hoodModern.png",
    "format": "gltf"
  }, {
    "name": "Blender",
    "model": "models/gltf/kitchenBlender.glb",
    "type": "2",
    "image": "models/thumbnails_new/kitchenBlender.png",
    "format": "gltf"
  }, {
    "name": "Cabinet Drawer",
    "model": "models/gltf/kitchenCabinetDrawer.glb",
    "type": "1",
    "image": "models/thumbnails_new/kitchenCabinetDrawer.png",
    "format": "gltf"
  }, {
    "name": "Kitchen cabinet corner round",
    "model": "models/gltf/kitchenCabinetCornerRound.glb",
    "type": "2",
    "image": "models/thumbnails_new/kitchenCabinetCornerRound.png",
    "format": "gltf"
  }, {
    "name": "Upper Kitchen Cabinet",
    "model": "models/gltf/kitchenCabinetUpper.glb",
    "type": "2",
    "image": "models/thumbnails_new/kitchenCabinetUpper.png",
    "format": "gltf"
  }, {
    "name": "Upper corner kitchen cabinet",
    "model": "models/gltf/kitchenCabinetUpperCorner.glb",
    "type": "2",
    "image": "models/thumbnails_new/kitchenCabinetUpperCorner.png",
    "format": "gltf"
  }, {
    "name": "Upper Double Kitchen Cabinet",
    "model": "models/gltf/kitchenCabinetUpperDouble.glb",
    "type": "2",
    "image": "models/thumbnails_new/kitchenCabinetUpperDouble.png",
    "format": "gltf"
  }, {
    "name": "Kitchen cabinet",
    "model": "models/gltf/kitchenCabinet.glb",
    "type": "1",
    "image": "models/thumbnails_new/kitchenCabinet.png",
    "format": "gltf"
  }, {
    "name": "Kitchen cabinet corner",
    "model": "models/gltf/kitchenCabinetCornerInner.glb",
    "type": "2",
    "image": "models/thumbnails_new/kitchenCabinetCornerInner.png",
    "format": "gltf"
  }, {
    "name": "Kitchen cabinet corner round",
    "model": "models/gltf/kitchenCabinetCornerRound.glb",
    "type": "2",
    "image": "models/thumbnails_new/kitchenCabinetCornerRound.png",
    "format": "gltf"
  }, {
    "name": "Upper Kitchen Cabinet low",
    "model": "models/gltf/kitchenCabinetUpperLow.glb",
    "type": "2",
    "image": "models/thumbnails_new/kitchenCabinetUpperLow.png",
    "format": "gltf"
  }, {
    "name": "Coffee Machine",
    "model": "models/gltf/kitchenCoffeeMachine.glb",
    "type": "2",
    "image": "models/thumbnails_new/kitchenCoffeeMachine.png",
    "format": "gltf"
  }, {
    "name": "Refridgerator",
    "model": "models/gltf/kitchenFridge.glb",
    "type": "1",
    "image": "models/thumbnails_new/kitchenFridge.png",
    "format": "gltf"
  }, {
    "name": "Built-in Refridgerator",
    "model": "models/gltf/kitchenFridgeBuiltIn.glb",
    "type": "1",
    "image": "models/thumbnails_new/kitchenFridgeBuiltIn.png",
    "format": "gltf"
  }, {
    "name": "Large Refridgerator",
    "model": "models/gltf/kitchenFridgeLarge.glb",
    "type": "1",
    "image": "models/thumbnails_new/kitchenFridgeLarge.png",
    "format": "gltf"
  }, {
    "name": "Small Refridgerator",
    "model": "models/gltf/kitchenFridgeSmall.glb",
    "type": "1",
    "image": "models/thumbnails_new/kitchenFridgeSmall.png",
    "format": "gltf"
  }, {
    "name": "Microwave",
    "model": "models/gltf/kitchenMicrowave.glb",
    "type": "2",
    "image": "models/thumbnails_new/kitchenMicrowave.png",
    "format": "gltf"
  }, {
    "name": "Kitchen Sink",
    "model": "models/gltf/kitchenSink.glb",
    "type": "1",
    "image": "models/thumbnails_new/kitchenSink.png",
    "format": "gltf"
  }, {
    "name": "Kitchen Stove",
    "model": "models/gltf/kitchenStove.glb",
    "type": "1",
    "image": "models/thumbnails_new/kitchenStove.png",
    "format": "gltf"
  }, {
    "name": "Electric Kitchen Stove",
    "model": "models/gltf/kitchenStoveElectric.glb",
    "type": "1",
    "image": "models/thumbnails_new/kitchenStoveElectric.png",
    "format": "gltf"
  }, {
    "name": "Trashcan",
    "model": "models/gltf/trashcan.glb",
    "type": "1",
    "image": "models/thumbnails_new/trashcan.png",
    "format": "gltf"
  }, {
    "name": "Wall",
    "model": "models/gltf/wall.glb",
    "type": "1",
    "image": "models/thumbnails_new/wall.png",
    "format": "gltf"
  }, {
    "name": "Cornor Wall",
    "model": "models/gltf/wallCorner.glb",
    "type": "3",
    "image": "models/thumbnails_new/wallCorner.png",
    "format": "gltf"
  }, {
    "name": "Doorway",
    "model": "models/gltf/wallDoorway.glb",
    "type": "3",
    "image": "models/thumbnails_new/wallDoorway.png",
    "format": "gltf"
  }, {
    "name": "Wide dorrway",
    "model": "models/gltf/wallDoorwayWide.glb",
    "type": "3",
    "image": "models/thumbnails_new/wallDoorwayWide.png",
    "format": "gltf"
  }, {
    "name": "Half Wall",
    "model": "models/gltf/wallHalf.glb",
    "type": "3",
    "image": "models/thumbnails_new/wallHalf.png",
    "format": "gltf"
  }, {
    "name": "Wall window",
    "model": "models/gltf/wallWindow.glb",
    "type": "3",
    "image": "models/thumbnails_new/wallWindow.png",
    "format": "gltf"
  }, {
    "name": "Wall window slide",
    "model": "models/gltf/wallWindowSlide.glb",
    "type": "3",
    "image": "models/thumbnails_new/wallWindowSlide.png",
    "format": "gltf"
  }, {
    "name": "Washer",
    "model": "models/gltf/washer.glb",
    "type": "1",
    "image": "models/thumbnails_new/washer.png",
    "format": "gltf"
  }, {
    "name": "Washer and dryer stacked",
    "model": "models/gltf/washerDryerStacked.glb",
    "type": "1",
    "image": "models/thumbnails_new/washerDryerStacked.png",
    "format": "gltf"
  }]
  var modelTypesNum = ["1", "2", "3"];
  var modelTypesIds = ["floor-items", "wall-items", "in-wall-items"];
  var itemsDiv = $("#items-wrapper");

  for (var i = 0; i < items.length; i++)

  {
    var item = items[i];
    itemsDiv = $("#" + modelTypesIds[modelTypesNum.indexOf(item.type)] + "-wrapper");

    var modelformat = (item.format) ? ' model-format="' + item.format + '"' : "";
    var html = '<div class="col-sm-4">' + '<a class="thumbnail add-item"' + ' model-name="' +
      item.name + '"' + ' model-url="' + item.model + '"' + ' model-type="' + item.type + '"' +
      modelformat + '>' + '<img src="' + item.image + '" alt="Add Item"   data-dismiss="modal" 	> ' +
      item.name + '</a></div>';

    itemsDiv.append(html);
  }
});
