const standardHexagons = [
    {
        "coordinate": "[1, 1]",
        "hexagon": {
            "gridX": 1,
            "gridY": 1,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "desert",
            "fill": "#F2F0A0",
            "number": 0,
            "size": 1
        }
    },
    {
        "coordinate": "[-1, 4]",
        "hexagon": {
            "gridX": -1,
            "gridY": 4,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "brick",
            "fill": "#E83200",
            "number": 6,
            "size": 1
        }
    },
    {
        "coordinate": "[0, 4]",
        "hexagon": {
            "gridX": 0,
            "gridY": 4,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "sheep",
            "fill": "#98E82E",
            "number": 6,
            "size": 1
        }
    },
    {
        "coordinate": "[-2, 4]",
        "hexagon": {
            "gridX": -2,
            "gridY": 4,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "wheat",
            "fill": "#E0E000",
            "number": 8,
            "size": 1
        }
    },
    {
        "coordinate": "[-2, 2]",
        "hexagon": {
            "gridX": -2,
            "gridY": 2,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "brick",
            "fill": "#E83200",
            "number": 8,
            "size": 1
        }
    },
    {
        "coordinate": "[0, 2]",
        "hexagon": {
            "gridX": 0,
            "gridY": 2,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "rock",
            "fill": "363636",
            "number": 2,
            "size": 1
        }
    },
    {
        "coordinate": "[2, 2]",
        "hexagon": {
            "gridX": 2,
            "gridY": 2,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "rock",
            "fill": "363636",
            "number": 3,
            "size": 1
        }
    },
    {
        "coordinate": "[0, 1]",
        "hexagon": {
            "gridX": 0,
            "gridY": 1,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "rock",
            "fill": "363636",
            "number": 3,
            "size": 1
        }
    },
    {
        "coordinate": "[1, 0]", // now 1, 0
        "hexagon": {
            "gridX": 1,
            "gridY": 0,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "wood",
            "fill": "#0A7300",
            "number": 4,
            "size": 1
        }
    },
    {
        "coordinate": "[1, 3]",
        "hexagon": {
            "gridX": 1,
            "gridY": 3,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "brick",
            "fill": "#E83200",
            "number": 4,
            "size": 1
        }
    },
    {
        "coordinate": "[-1, 3]",
        "hexagon": {
            "gridX": -1,
            "gridY": 3,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "sheep",
            "fill": "#98E82E",
            "number": 5,
            "size": 1
        }
    },
    {
        "coordinate": "[2, 0]",  // now 2, 0
        "hexagon": {
            "gridX": 2,
            "gridY": 0,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "wood",
            "fill": "#0A7300",
            "number": 5,
            "size": 1
        }
    },
    {
        "coordinate": "[0, 0]",
        "hexagon": {
            "gridX": 0,
            "gridY": 0,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "sheep",
            "fill": "#98E82E",
            "number": 9,
            "size": 1
        }
    },
    {
        "coordinate": "[-1, 1]",
        "hexagon": {
            "gridX": -1,
            "gridY": 1,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "sheep",
            "fill": "#98E82E",
            "number": 9,
            "size": 1
        }
    },
    {
        "coordinate": "[0, 3]",
        "hexagon": {
            "gridX": 0,
            "gridY": 3,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "wheat",
            "fill": "#E0E000",
            "number": 10,
            "size": 1
        }
    },
    {
        "coordinate": "[-1, 2]",
        "hexagon": {
            "gridX": -1,
            "gridY": 2,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "wood",
            "fill": "#0A7300",
            "number": 10,
            "size": 1
        }
    },
    {
        "coordinate": "[-2, 3]",
        "hexagon": {
            "gridX": -2,
            "gridY": 3,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "wood",
            "fill": "#0A7300",
            "number": 11,
            "size": 1
        }
    },
    {
        "coordinate": "[2, 1]",  // now 2, 1
        "hexagon": {
            "gridX": 2,
            "gridY": 1,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "wheat",
            "fill": "#E0E000",
            "number": 11,
            "size": 1
        }
    },
    {
        "coordinate": "[1, 2]",
        "hexagon": {
            "gridX": 1,
            "gridY": 2,
            "xCenter": null,
            "yCenter": null,
            "resourceType": "wheat",
            "fill": "#E0E000",
            "number": 12,
            "size": 1
        }
    }
];

const secretFills = {
    'brick': 'https://i2-prod.mirror.co.uk/incoming/article22526515.ece/ALTERNATES/s1200c/0_image12jpeg.jpg'
    , 'sheep': 'https://i.guim.co.uk/img/media/22bed68981e92d7a9ff204ed7d7f5776a16468fe/1933_1513_3623_2173/master/3623.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b7545d644ba9f6bcc673a8bdf6d7db83'
    , 'rock': 'https://media1.popsugar-assets.com/files/thumbor/fQV14blXlEh5-GohuhnAudI7TG8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-:watermark-!popsugar-watermark_2x.png,-5,-5,0!-/2017/05/24/652/n/1922398/11ba884859259b36435d63.10345825_edit_img_image_16360412_1495635996/i/Dwayne-Johnson-Posing-Rock-Photos.jpg'
    , 'wood': 'https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/115718655_2581785831925005_3540459484944104565_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=ozqgwbqHpOAAX-UpNSR&_nc_ht=scontent-bos3-1.xx&oh=7730b44bf7395abaaf3473ea505e0fc7&oe=603566B3'
    , 'wheat': 'https://bloximages.newyork1.vip.townnews.com/foxcarolina.com/content/tncms/assets/v3/editorial/6/b2/6b22e7a2-fc93-5405-b256-bc85805e2a71/5dc4cfdcc9841.image.jpg?crop=674%2C674%2C175%2C0&resize=1200%2C1200&order=crop%2Cresize'
    , 'desert': 'https://i.pinimg.com/736x/65/2e/37/652e37c03582cb888d3f1d7e06b98b8c.jpg'
  };

const fills = {
'brick': 'https://previews.123rf.com/images/romashka46/romashka461212/romashka46121200012/17015813-square-brick-wall.jpg'
, 'sheep': 'https://www.desicomments.com/wp-content/uploads/Sheep-Animal-600x600.jpg'
, 'rock': 'https://www.evergladesfarmequipment.com/img/products/landscape-supply/egg-rock.jpg'
, 'wood': 'https://www.forestforfuture.org/forestff/wp-content/uploads/2017/09/fff_gallery2-600x600.jpg'
, 'wheat': 'https://www.uswheat.org/wp-content/uploads/2020/08/Wheat-Harvest-2007-iStock-700x700.jpg'
, 'desert': 'https://i.pinimg.com/736x/65/2e/37/652e37c03582cb888d3f1d7e06b98b8c.jpg'
};
export {fills, secretFills, standardHexagons};