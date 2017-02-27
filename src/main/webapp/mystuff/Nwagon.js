
var CONST_SVG_URL = 'http://www.w3.org/2000/svg';
var VML_NAME_SPACE = 'urn:schemas-microsoft-com:vml'
var CONST_MAX_RADIUS = 100;
var CONST_DECREMENT = 20;

var Nwagon = {

    chart: function(options){
        var isIE_old = false;
        if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { //test for MSIE x.x;
            var ieversion = new Number(RegExp.$1); // capture x.x portion and store as a number
            if (ieversion <= 8){

                isIE_old = true;
                if(!document.namespaces['v']) {
                   document.namespaces.add('v', VML_NAME_SPACE);
                }
            }
        }
        var chartObj = new Object();
        chartObj.chartType = options['chartType'];
        chartObj.dataset = options['dataset'];
        chartObj.legend = options['legend'];
        chartObj.width = options['chartSize']['width'];
        chartObj.height = options['chartSize']['height'];
        chartObj.chart_div = options['chartDiv'];

        //************ values.length should be equal to names.length **************// 
        switch (chartObj.chartType)
        {
            case ('radar') :
                isIE_old ? Nwagon_ie.radar.drawRadarChart(chartObj) : this.radar.drawRadarChart(chartObj);
                break;
        }
    },

   createChartArea: function(parentSVG, chartType, viewbox, width, height){

        var chartDiv = document.getElementById(parentSVG);
        var textArea = document.createElement('ul');
        textArea.className = 'accessibility';
        chartDiv.appendChild(textArea);
        var attr = {'version':'1.1', 'width':width, 'height':height, 'viewBox':viewbox, 'class':'Nwagon_' + chartType, 'aria-hidden':'true'};
        var svg = Nwagon.createSvgElem('svg', attr);
        chartDiv.appendChild(svg);

        return svg;
    },

    createSvgElem: function(elem, attr){
        var svgElem = document.createElementNS(CONST_SVG_URL, elem);
        Nwagon.setAttributes(svgElem, attr);
        return svgElem;
    },
    setAttributes: function(svgObj, attributes){
        var keys_arr = Object.keys(attributes);
        var len = keys_arr.length;
        for(var i = 0; i<len; i++){
            svgObj.setAttribute(keys_arr[i], attributes[keys_arr[i]]);
        }
    },

    getMax: function(a){
        var maxValue = 0;
        if(a.length){
            for (var j = 0; j < a.length; j++)
            {
                var a_sub = a[j];
                if(a_sub.length){
                    for(var k = 0; k<a_sub.length; k++){
                        if (typeof(a_sub[k]) == 'number' && a_sub[k] > maxValue) maxValue = a_sub[k];    
                    }
                }
                else{
                    if (typeof(a[j]) == 'number' && a[j] > maxValue) maxValue = a[j];
                }
            }
        }
        return maxValue;
    },

    createTooltip: function(){
        var tooltip = Nwagon.createSvgElem('g', {'class':'tooltip'});
        var tooltipbg = Nwagon.createSvgElem('rect', {});
        tooltip.appendChild(tooltipbg);

        var tooltiptxt = Nwagon.createSvgElem('text', {});
        tooltip.appendChild(tooltiptxt);

        return tooltip;
    },

    showToolTip: function(tooltip, px, py, value, height, ytextOffset, yRectOffset){
        return function(){
            tooltip.style.cssText = "display: block";
            var text_el = tooltip.getElementsByTagName('text')[0];
            text_el.textContent = ' '+value;
            Nwagon.setAttributes(text_el, {'x':px, 'y':py-ytextOffset, 'text-anchor':'middle'});
            var width = text_el.getBBox().width;
            Nwagon.setAttributes(tooltip.getElementsByTagName('rect')[0], {'x':(px-width/2)-5, 'y':py-yRectOffset, 'width':width+10,'height':height});
        }
    },

    hideToolTip: function(tooltip){
        return function(){
            tooltip.style.cssText = "display: none";
        }
    },

    getAngles: function(arr, angles){
                    
        var total = 0;
        for(var i=0; i<arr.length; i++){
            total+=arr[i];
        }
        for(i=0; i<arr.length; i++){
            var degree = 360 * (arr[i]/total);
            angles['angles'].push(degree);
            angles['percent'].push(arr[i]/total);
            angles['values'].push(arr[i]);
        }
        return angles;
    },
    getOpacity: function(opa, r, max_r){
                var len  = opa.length;
                var interval = max_r/len;
                var value = Math.ceil(r/interval);
                return opa[value-1];
    },

    radar: {

        drawRadarChart: function(obj){

            var width = obj.width, height = obj.height;
            var viewbox = '-' + width/2 + ' -' + height/2 + ' ' + width + ' ' + height;
            var svg =  Nwagon.createChartArea(obj.chart_div, obj.chartType, viewbox, width, height);

            this.drawBackground(svg, obj.legend['names'].length, obj.dataset['bgColor'], CONST_DECREMENT, CONST_MAX_RADIUS);
            this.drawLabels(svg, obj.legend, CONST_MAX_RADIUS);
            this.drawCoordinates(svg, CONST_DECREMENT, CONST_MAX_RADIUS);
            this.drawPolygonForeground(obj.chart_div, svg, obj.legend, obj.dataset);
        },

        drawCoordinates: function(parentSVG, decrement, maxRadius){

            var g = Nwagon.createSvgElem('g', {'class':'xAxis'});
            var i = maxRadius, y=0.0, point=0.0;

            while (i > 0)
            {
                point = i+',' + y;

                var attributes = {'points': point, 'x':i, 'y':y, 'text-anchor':'middle'};
                var text = Nwagon.createSvgElem('text', attributes);
                text.textContent = i.toString();
//                g.appendChild(text);
                i-=decrement;
            }
            parentSVG.appendChild(g);
        },

        drawLabels: function(parentSVG, legend, maxRadius){

            var labels = Nwagon.createSvgElem('g', {'class':'labels'});
            var hrefs = legend['hrefs'], names = legend['names'];
            var numOfRadars = names.length;
            var attributes = {};

            for(var index = 0; index < names.length; index++){
                var angle = (Math.PI*2)/numOfRadars; // (2*PI)/numOfRadars
                var x = 0 + (maxRadius+12) * Math.cos(((Math.PI*2)/numOfRadars) * (index));
                var y = 0 + (maxRadius+12) * Math.sin(((Math.PI*2)/numOfRadars) * (index));
                var align = (x < 0) ? 'end' : 'start';
                if(x < 1 && x > -1) align = 'middle';

                if(hrefs){
                    attributes = {'onclick':'location.href="' + hrefs[index] + '"', 'x':x, 'y':y, 'text-anchor':align, 'class':'chart_label'};
                }else{
                    attributes = {'x':x, 'y':y, 'text-anchor':align, 'class':'chart_label'};
                }
                var text = Nwagon.createSvgElem('text', attributes);
                text.textContent = names[index];

                labels.appendChild(text);
            }
            parentSVG.appendChild(labels);
        },

        drawPie: function(parentGroup, numOfRadars, maxRadius, decrement, bg_color){
            /* Draw outer solid line and then inner dotted lines  */

            var angle = (Math.PI*2)/numOfRadars;
            var p0='', p1='', p2='';
            var attributes = {}, points ='';
            var radius = maxRadius;

            var pie = Nwagon.createSvgElem('g', {'class':'pie'});

            while (radius > 0)
            {
                p0 = radius+',0'; //'100,0';
                p1 = '0,0';
                p2 = (radius*Math.sin(angle)/Math.tan(angle)) + ',' + (-radius*Math.sin(angle));

               if (radius == maxRadius)
                {
                    points = p0 + ' ' + p1 + ' ' + p2;
                    var lr = Nwagon.createSvgElem('polyline', {'points':points, 'fill': bg_color});
                    pie.appendChild(lr);
                }

                points = p0 + ' ' + p2;
                attributes =  {'points':points, 'stroke-dasharray':'2px,2px', 'fill': bg_color};
                var la = Nwagon.createSvgElem('polyline', attributes);

                pie.appendChild(la);
                radius-=decrement;
            }

            parentGroup.appendChild(pie);
            return pie;

        },

        drawBackground: function(parentSVG, numOfRadars, bg_color, decrement, maxRadius){
            var bg = bg_color ?  bg_color : '#F9F9F9';
            var angle = 360/numOfRadars;

            var background = Nwagon.createSvgElem('g', {'class':'background'});
            parentSVG.appendChild(background);

            for(var j=1; j<=numOfRadars; j++)
            {
                var current_pie = this.drawPie(background, numOfRadars, maxRadius, decrement, bg);
                current_pie.setAttribute('transform','rotate('+angle * (j-1)+')');
            }
        },

      
       drawPolygonForeground: function(parentDiv, parentSVG, legend, data){ // 그래프 그리는 용도 

            var dataGroup = data['values'];
            var title = data['title'];
            var fg_color = data['fgColor'] ? data['fgColor'] : '#30A1CE';
            var istooltipNeeded = (dataGroup.length == 1) ? true : false;
            var names = legend['names'];

            var ul = document.getElementById(parentDiv).getElementsByTagName('ul')[0];
            if(ul){
                ul.innerHTML = title;
            }

            for(var i=0; i<dataGroup.length; i++){
                if(ul)
                {
                    var textEl = document.createElement('li');
                    textEl.innerHTML = 'Data set number ' + (i+1).toString();
                    var innerUL = document.createElement('ul');
                    textEl.appendChild(innerUL);
                    ul.appendChild(textEl);
                }
                var dataset = dataGroup[i];
                var length = dataset.length;
                var coordinate = [];
                var angle = (Math.PI/180)*(360/length);
                var pointValue = 0.0, px=0.0; py=0, attributes = {};
                var vertexes = [], tooltips =[];

                var foreground = Nwagon.createSvgElem('g', {'class':'foreground'});
                parentSVG.appendChild(foreground);

                var polygon = Nwagon.createSvgElem('polyline', {'class':'polygon'});
                foreground.appendChild(polygon);

                var tooltip = {};
                if (istooltipNeeded)
                {
                    tooltip = Nwagon.createTooltip();
                }

                for(var index =0; index < dataset.length; index++){
                    if(innerUL){
                        var innerLI = document.createElement('li');
                        innerLI.innerHTML = names[index] + ': ' + dataset[index];
                        innerUL.appendChild(innerLI);
                    }
                    pointValue = dataset[index];
                    pointDisplay = dataset[index];
                    if (typeof(dataset[index]) != 'number')
                    {
                        Nwagon.radar.dimmedPie(foreground, index, length);
                        pointValue = 0;
                        pointDisplay = dataset[index];
                    }

                    px = (index == 0) ? pointValue : pointValue*Math.sin(angle*index)/Math.tan(angle*index);
                    py = (index == 0) ? 0 : pointValue*Math.sin(angle*index);
                    coordinate.push(px + ',' + py);

                    attributes = {'cx':px, 'cy':py, 'r':3, 'stroke-width':8, 'stroke':'transparent', 'fill': fg_color};
                    var vertex = Nwagon.createSvgElem('circle', attributes);

                    if (istooltipNeeded)
                    {
                        vertex.onmouseover = Nwagon.showToolTip(tooltip, px, py, names[index] + ' : ' +  pointDisplay, 20, 15, 28);
                        vertex.onmouseout = Nwagon.hideToolTip(tooltip);
                    }
                    foreground.appendChild(vertex);
                    vertex = null;
                }

                var coordinates = coordinate.join(' ');
                var attributes = {'points':coordinates, 'class':'polygon', 'fill': fg_color, 'stroke':fg_color};
                Nwagon.setAttributes(polygon, attributes);

                if (istooltipNeeded) foreground.appendChild(tooltip);
            }
        }
    }
};

var Nwagon_ie = {

    radar: {

        drawRadarChart: function(obj){

            var width = obj.width, height = obj.height;
            var canvas =  Nwagon_ie.createChartArea(obj.chart_div, width, height);

            this.drawBackground(canvas, obj.legend['names'], obj.dataset['bgColor'], CONST_DECREMENT, CONST_MAX_RADIUS, height, width);
            // this.drawLabels(svg, obj.legend, CONST_MAX_RADIUS);
            this.drawPolygonForeground(obj.chart_div, canvas, obj.legend, obj.dataset, height, width);
        },

        drawBackground: function(canvas, names, bg_color, decrement, maxRadius, h, w){
            var numOfRadars = names.length;
            var bg = bg_color ?  bg_color : '#F9F9F9';
            var cx = Math.round(w/2), cy = Math.round(h/2); 
            var sector_angle  = (Math.PI*2)/numOfRadars, tweak_angle = Math.PI;  //start on 180 degree
            var rotate_angle = 0, prev_angle = 0;
            var p0= cx + ' '+ cy , p1='', p2='';
            var style_attr = {'position':'absolute', 'width': canvas.style.width, 'height': canvas.style.height};
            var style_label = {};

            var drawline = function(start, end, style, isdashed){
                var line = document.createElement('v:shape'); 
                var path = 'M '+start+ 'L ' + end;
                var attributes = {'path': path, 'strokecolor':'#666', 'strokeweight':'1px'};    
                Nwagon_ie.setAttributes(line, attributes);
                Nwagon_ie.setStyles(line, style);
                if(isdashed){
                    var stroke = document.createElement('v:stroke'); 
                    stroke.setAttribute('dashstyle', 'dash');
                    line.appendChild(stroke);
                }
                return line;
            };
            var draw_x_coord = function(text_to_add, x, y){
                var label = document.createElement('div'); 
                label.appendChild(document.createTextNode(text_to_add));
                Nwagon_ie.setStyles(label, {'cssText':'position:absolute; z-index:100', 'left': x + 'px', 'top':  (y-5)+ 'px', 'fontSize': '10px'});
                return label;
            };

            for(var j= 1 ; j<=numOfRadars; j++){
                var label_location_off = 0;
                var radius = maxRadius;
                prev_angle = (sector_angle * (j-1)) + tweak_angle;
                rotate_angle = (sector_angle * j) + tweak_angle;
                var x_off = Math.round((maxRadius+20) * Math.cos(rotate_angle));
                var y_off = Math.round((maxRadius+20) * Math.sin(rotate_angle));
                p1 = (cx- Math.round(maxRadius * Math.cos(rotate_angle))) +' ' + (h - cy -  Math.round((maxRadius) * Math.sin(rotate_angle)));
                var straight_line = drawline(p0, p1, style_attr, false);
                canvas.appendChild(straight_line);
                
                // add labels 
                var label = document.createElement('div'); 
                if(j == numOfRadars) label.appendChild(document.createTextNode(names[0]));
                else label.appendChild(document.createTextNode(names[j]));
                style_label = {'cssText':'position:absolute; z-index:100', 'fontSize': '12px'};
                Nwagon_ie.setStyles(label, style_label);
                canvas.appendChild(label);
                if(x_off > 0) {
                    label_location_off = label.clientWidth;
                }
                if (x_off == 0) {
                    label_location_off = Math.round(label.clientWidth/2);
                } 
                label.style.left = (cx- x_off - label_location_off) + 'px';
                label.style.top = (h - cy - (y_off+5)) + 'px';

                while(radius>0){
                    if(j == 1){
                        //draw coordinate labels
                        var x_coord = draw_x_coord(radius.toString(), (cx + radius), (h-cy));
                        canvas.appendChild(x_coord);
                    }
                    //draw dotted bg lines && 
                    p1 = (cx- Math.round(radius * Math.cos(rotate_angle))) +' ' + (h - cy - Math.round((radius) * Math.sin(rotate_angle)));
                    p2 = (cx- Math.round(radius * Math.cos(prev_angle))) +' ' + (h - cy - Math.round((radius) * Math.sin(prev_angle)));
                    
                    var dashed_line = drawline(p1, p2, style_attr, true);
                    canvas.appendChild(dashed_line);
                    radius-=decrement;
                }
            }
        }
    }
}

