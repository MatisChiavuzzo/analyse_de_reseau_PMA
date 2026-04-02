ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([969013.885660, 6702298.823200, 1009426.226197, 6725158.328959]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'opacity': 0.350000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_IndicateurglobalparACPpondrdaccessibilit_1 = new ol.format.GeoJSON();
var features_IndicateurglobalparACPpondrdaccessibilit_1 = format_IndicateurglobalparACPpondrdaccessibilit_1.readFeatures(json_IndicateurglobalparACPpondrdaccessibilit_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_IndicateurglobalparACPpondrdaccessibilit_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicateurglobalparACPpondrdaccessibilit_1.addFeatures(features_IndicateurglobalparACPpondrdaccessibilit_1);
var lyr_IndicateurglobalparACPpondrdaccessibilit_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndicateurglobalparACPpondrdaccessibilit_1, 
                style: style_IndicateurglobalparACPpondrdaccessibilit_1,
                popuplayertitle: 'Indicateur global par ACP (pondéré) d\'accessibilité',
                interactive: true,
    title: 'Indicateur global par ACP (pondéré) d\'accessibilité<br />\
    <img src="styles/legend/IndicateurglobalparACPpondrdaccessibilit_1_0.png" /> 0.0 - 0.001<br />\
    <img src="styles/legend/IndicateurglobalparACPpondrdaccessibilit_1_1.png" /> 0.002 - 0.18<br />\
    <img src="styles/legend/IndicateurglobalparACPpondrdaccessibilit_1_2.png" /> 0.19 - 0.36<br />\
    <img src="styles/legend/IndicateurglobalparACPpondrdaccessibilit_1_3.png" /> 0.37 - 0.55<br />\
    <img src="styles/legend/IndicateurglobalparACPpondrdaccessibilit_1_4.png" /> 0.56 - 0.85<br />\
    <img src="styles/legend/IndicateurglobalparACPpondrdaccessibilit_1_5.png" /> 0.86 - 1<br />' });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_IndicateurglobalparACPpondrdaccessibilit_1.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_IndicateurglobalparACPpondrdaccessibilit_1];
lyr_IndicateurglobalparACPpondrdaccessibilit_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SUPERF_CAD': 'SUPERF_CAD', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'CODE_SIREN': 'CODE_SIREN', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'Indicateur par ACP (pondéré)': 'Indicateur par ACP (pondéré)', });
lyr_IndicateurglobalparACPpondrdaccessibilit_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SUPERF_CAD': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'Indicateur par ACP (pondéré)': 'TextEdit', });
lyr_IndicateurglobalparACPpondrdaccessibilit_1.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'INSEE_COM': 'inline label - always visible', 'INSEE_CAN': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'inline label - always visible', 'SUPERF_CAD': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'inline label - always visible', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'CODE_SIREN': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'Indicateur par ACP (pondéré)': 'inline label - always visible', });
lyr_IndicateurglobalparACPpondrdaccessibilit_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});