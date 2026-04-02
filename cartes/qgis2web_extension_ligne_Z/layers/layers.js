ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([985171.089000, 6717005.986164, 994392.918725, 6723044.986375]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'opacity': 0.350000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Commune_1 = new ol.format.GeoJSON();
var features_Commune_1 = format_Commune_1.readFeatures(json_Commune_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Commune_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_1.addFeatures(features_Commune_1);
var lyr_Commune_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_1, 
                style: style_Commune_1,
                popuplayertitle: 'Commune',
                interactive: true,
                title: '<img src="styles/legend/Commune_1.png" /> Commune'
            });
var format_Isochronesde10minutesdepuislesarrtsproposs_2 = new ol.format.GeoJSON();
var features_Isochronesde10minutesdepuislesarrtsproposs_2 = format_Isochronesde10minutesdepuislesarrtsproposs_2.readFeatures(json_Isochronesde10minutesdepuislesarrtsproposs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Isochronesde10minutesdepuislesarrtsproposs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochronesde10minutesdepuislesarrtsproposs_2.addFeatures(features_Isochronesde10minutesdepuislesarrtsproposs_2);
var lyr_Isochronesde10minutesdepuislesarrtsproposs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isochronesde10minutesdepuislesarrtsproposs_2, 
                style: style_Isochronesde10minutesdepuislesarrtsproposs_2,
                popuplayertitle: 'Isochrones de 10 minutes depuis les arrêts proposés',
                interactive: false,
                title: '<img src="styles/legend/Isochronesde10minutesdepuislesarrtsproposs_2.png" /> Isochrones de 10 minutes depuis les arrêts proposés'
            });
var format_Btimentsrsidentielsnoncouvertsparlerseauactuel_3 = new ol.format.GeoJSON();
var features_Btimentsrsidentielsnoncouvertsparlerseauactuel_3 = format_Btimentsrsidentielsnoncouvertsparlerseauactuel_3.readFeatures(json_Btimentsrsidentielsnoncouvertsparlerseauactuel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Btimentsrsidentielsnoncouvertsparlerseauactuel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btimentsrsidentielsnoncouvertsparlerseauactuel_3.addFeatures(features_Btimentsrsidentielsnoncouvertsparlerseauactuel_3);
var lyr_Btimentsrsidentielsnoncouvertsparlerseauactuel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Btimentsrsidentielsnoncouvertsparlerseauactuel_3, 
                style: style_Btimentsrsidentielsnoncouvertsparlerseauactuel_3,
                popuplayertitle: 'Bâtiments résidentiels non couverts par le réseau actuel',
                interactive: true,
                title: '<img src="styles/legend/Btimentsrsidentielsnoncouvertsparlerseauactuel_3.png" /> Bâtiments résidentiels non couverts par le réseau actuel'
            });
var format_LigneactuelleZ_4 = new ol.format.GeoJSON();
var features_LigneactuelleZ_4 = format_LigneactuelleZ_4.readFeatures(json_LigneactuelleZ_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_LigneactuelleZ_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LigneactuelleZ_4.addFeatures(features_LigneactuelleZ_4);
var lyr_LigneactuelleZ_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LigneactuelleZ_4, 
                style: style_LigneactuelleZ_4,
                popuplayertitle: 'Ligne actuelle (Z)',
                interactive: true,
                title: '<img src="styles/legend/LigneactuelleZ_4.png" /> Ligne actuelle (Z)'
            });
var format_Nouveautronon_5 = new ol.format.GeoJSON();
var features_Nouveautronon_5 = format_Nouveautronon_5.readFeatures(json_Nouveautronon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Nouveautronon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nouveautronon_5.addFeatures(features_Nouveautronon_5);
var lyr_Nouveautronon_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nouveautronon_5, 
                style: style_Nouveautronon_5,
                popuplayertitle: 'Nouveau tronçon',
                interactive: false,
                title: '<img src="styles/legend/Nouveautronon_5.png" /> Nouveau tronçon'
            });
var format_Arrtpropospourlextensiondelaligne_6 = new ol.format.GeoJSON();
var features_Arrtpropospourlextensiondelaligne_6 = format_Arrtpropospourlextensiondelaligne_6.readFeatures(json_Arrtpropospourlextensiondelaligne_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Arrtpropospourlextensiondelaligne_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arrtpropospourlextensiondelaligne_6.addFeatures(features_Arrtpropospourlextensiondelaligne_6);
var lyr_Arrtpropospourlextensiondelaligne_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arrtpropospourlextensiondelaligne_6, 
                style: style_Arrtpropospourlextensiondelaligne_6,
                popuplayertitle: 'Arrêt proposé pour l\'extension de la ligne',
                interactive: false,
                title: '<img src="styles/legend/Arrtpropospourlextensiondelaligne_6.png" /> Arrêt proposé pour l\'extension de la ligne'
            });
var format_Arrtprsentsurlerseauactuel_7 = new ol.format.GeoJSON();
var features_Arrtprsentsurlerseauactuel_7 = format_Arrtprsentsurlerseauactuel_7.readFeatures(json_Arrtprsentsurlerseauactuel_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Arrtprsentsurlerseauactuel_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arrtprsentsurlerseauactuel_7.addFeatures(features_Arrtprsentsurlerseauactuel_7);
var lyr_Arrtprsentsurlerseauactuel_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arrtprsentsurlerseauactuel_7, 
                style: style_Arrtprsentsurlerseauactuel_7,
                popuplayertitle: 'Arrêt présent sur le réseau actuel',
                interactive: false,
                title: '<img src="styles/legend/Arrtprsentsurlerseauactuel_7.png" /> Arrêt présent sur le réseau actuel'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_Commune_1.setVisible(true);lyr_Isochronesde10minutesdepuislesarrtsproposs_2.setVisible(true);lyr_Btimentsrsidentielsnoncouvertsparlerseauactuel_3.setVisible(true);lyr_LigneactuelleZ_4.setVisible(true);lyr_Nouveautronon_5.setVisible(true);lyr_Arrtpropospourlextensiondelaligne_6.setVisible(true);lyr_Arrtprsentsurlerseauactuel_7.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_Commune_1,lyr_Isochronesde10minutesdepuislesarrtsproposs_2,lyr_Btimentsrsidentielsnoncouvertsparlerseauactuel_3,lyr_LigneactuelleZ_4,lyr_Nouveautronon_5,lyr_Arrtpropospourlextensiondelaligne_6,lyr_Arrtprsentsurlerseauactuel_7];
lyr_Commune_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SUPERF_CAD': 'SUPERF_CAD', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'CODE_SIREN': 'CODE_SIREN', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_Isochronesde10minutesdepuislesarrtsproposs_2.set('fieldAliases', {'fid': 'fid', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_Btimentsrsidentielsnoncouvertsparlerseauactuel_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NATURE': 'NATURE', 'USAGE1': 'USAGE1', 'USAGE2': 'USAGE2', 'LEGER': 'LEGER', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_LOGTS': 'NB_LOGTS', 'NB_ETAGES': 'NB_ETAGES', 'MAT_MURS': 'MAT_MURS', 'MAT_TOITS': 'MAT_TOITS', 'HAUTEUR': 'HAUTEUR', 'Z_MIN_SOL': 'Z_MIN_SOL', 'Z_MIN_TOIT': 'Z_MIN_TOIT', 'Z_MAX_TOIT': 'Z_MAX_TOIT', 'Z_MAX_SOL': 'Z_MAX_SOL', 'ORIGIN_BAT': 'ORIGIN_BAT', 'APP_FF': 'APP_FF', 'IDS_RNB': 'IDS_RNB', 'SRAFCE': 'SRAFCE', 'fid_2': 'fid_2', 'idcar_200m': 'idcar_200m', 'idcar_1km': 'idcar_1km', 'idcar_nat': 'idcar_nat', 'i_est_200': 'i_est_200', 'i_est_1km': 'i_est_1km', 'lcog_geo': 'lcog_geo', 'ind': 'ind', 'men': 'men', 'men_pauv': 'men_pauv', 'men_1ind': 'men_1ind', 'men_5ind': 'men_5ind', 'men_prop': 'men_prop', 'men_fmp': 'men_fmp', 'ind_snv': 'ind_snv', 'men_surf': 'men_surf', 'men_coll': 'men_coll', 'men_mais': 'men_mais', 'log_av45': 'log_av45', 'log_45_70': 'log_45_70', 'log_70_90': 'log_70_90', 'log_ap90': 'log_ap90', 'log_inc': 'log_inc', 'log_soc': 'log_soc', 'ind_0_3': 'ind_0_3', 'ind_4_5': 'ind_4_5', 'ind_6_10': 'ind_6_10', 'ind_11_17': 'ind_11_17', 'ind_18_24': 'ind_18_24', 'ind_25_39': 'ind_25_39', 'ind_40_54': 'ind_40_54', 'ind_55_64': 'ind_55_64', 'ind_65_79': 'ind_65_79', 'ind_80p': 'ind_80p', 'ind_inc': 'ind_inc', 'surf_bat': 'surf_bat', 'surf_tot_carreau_bat_None': 'surf_tot_carreau_bat_None', 'pop_estime': 'pop_estime', 'fid_3': 'fid_3', 'ID_2': 'ID_2', 'INSEE_COM': 'INSEE_COM', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SUPERF_CAD': 'SUPERF_CAD', 'DATE_CREAT_2': 'DATE_CREAT_2', 'DATE_MAJ_2': 'DATE_MAJ_2', 'DATE_APP_2': 'DATE_APP_2', 'DATE_CONF_2': 'DATE_CONF_2', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'CODE_SIREN': 'CODE_SIREN', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_LigneactuelleZ_4.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'description': 'description', 'id': 'id', 'name': 'name', 'route_color': 'route_color', 'route_id': 'route_id', 'route_long_name': 'route_long_name', 'route_short_name': 'route_short_name', 'route_text_color': 'route_text_color', 'wheelchair_boarding': 'wheelchair_boarding', });
lyr_Nouveautronon_5.set('fieldAliases', {'fid': 'fid', 'Longueur': 'Longueur', });
lyr_Arrtpropospourlextensiondelaligne_6.set('fieldAliases', {'fid': 'fid', });
lyr_Arrtprsentsurlerseauactuel_7.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'descriptio': 'descriptio', 'id': 'id', 'name': 'name', 'route_colo': 'route_colo', 'route_id': 'route_id', 'route_long': 'route_long', 'route_shor': 'route_shor', 'route_text': 'route_text', 'wheelchair': 'wheelchair', });
lyr_Commune_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'TextEdit', 'SUPERF_CAD': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', });
lyr_Isochronesde10minutesdepuislesarrtsproposs_2.set('fieldImages', {'fid': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Btimentsrsidentielsnoncouvertsparlerseauactuel_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NATURE': 'TextEdit', 'USAGE1': 'TextEdit', 'USAGE2': 'TextEdit', 'LEGER': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_LOGTS': 'TextEdit', 'NB_ETAGES': 'TextEdit', 'MAT_MURS': 'TextEdit', 'MAT_TOITS': 'TextEdit', 'HAUTEUR': 'TextEdit', 'Z_MIN_SOL': 'TextEdit', 'Z_MIN_TOIT': 'TextEdit', 'Z_MAX_TOIT': 'TextEdit', 'Z_MAX_SOL': 'TextEdit', 'ORIGIN_BAT': 'TextEdit', 'APP_FF': 'TextEdit', 'IDS_RNB': 'TextEdit', 'SRAFCE': 'Range', 'fid_2': 'TextEdit', 'idcar_200m': 'TextEdit', 'idcar_1km': 'TextEdit', 'idcar_nat': 'TextEdit', 'i_est_200': 'Range', 'i_est_1km': 'Range', 'lcog_geo': 'TextEdit', 'ind': 'TextEdit', 'men': 'TextEdit', 'men_pauv': 'TextEdit', 'men_1ind': 'TextEdit', 'men_5ind': 'TextEdit', 'men_prop': 'TextEdit', 'men_fmp': 'TextEdit', 'ind_snv': 'TextEdit', 'men_surf': 'TextEdit', 'men_coll': 'TextEdit', 'men_mais': 'TextEdit', 'log_av45': 'TextEdit', 'log_45_70': 'TextEdit', 'log_70_90': 'TextEdit', 'log_ap90': 'TextEdit', 'log_inc': 'TextEdit', 'log_soc': 'TextEdit', 'ind_0_3': 'TextEdit', 'ind_4_5': 'TextEdit', 'ind_6_10': 'TextEdit', 'ind_11_17': 'TextEdit', 'ind_18_24': 'TextEdit', 'ind_25_39': 'TextEdit', 'ind_40_54': 'TextEdit', 'ind_55_64': 'TextEdit', 'ind_65_79': 'TextEdit', 'ind_80p': 'TextEdit', 'ind_inc': 'TextEdit', 'surf_bat': 'Range', 'surf_tot_carreau_bat_None': 'TextEdit', 'pop_estime': 'Range', 'fid_3': 'TextEdit', 'ID_2': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SUPERF_CAD': 'Range', 'DATE_CREAT_2': 'TextEdit', 'DATE_MAJ_2': 'TextEdit', 'DATE_APP_2': 'DateTime', 'DATE_CONF_2': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', });
lyr_LigneactuelleZ_4.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'description': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'route_color': 'TextEdit', 'route_id': 'TextEdit', 'route_long_name': 'TextEdit', 'route_short_name': 'TextEdit', 'route_text_color': 'TextEdit', 'wheelchair_boarding': 'TextEdit', });
lyr_Nouveautronon_5.set('fieldImages', {'fid': 'TextEdit', 'Longueur': 'Range', });
lyr_Arrtpropospourlextensiondelaligne_6.set('fieldImages', {'fid': 'TextEdit', });
lyr_Arrtprsentsurlerseauactuel_7.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'descriptio': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'route_colo': 'TextEdit', 'route_id': 'TextEdit', 'route_long': 'TextEdit', 'route_shor': 'TextEdit', 'route_text': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_Commune_1.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'INSEE_COM': 'inline label - always visible', 'INSEE_CAN': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'inline label - always visible', 'SUPERF_CAD': 'inline label - always visible', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'inline label - always visible', 'NOM': 'inline label - always visible', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'CODE_SIREN': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_Isochronesde10minutesdepuislesarrtsproposs_2.set('fieldLabels', {'fid': 'no label', 'CostValue': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Btimentsrsidentielsnoncouvertsparlerseauactuel_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'NATURE': 'hidden field', 'USAGE1': 'inline label - always visible', 'USAGE2': 'hidden field', 'LEGER': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_PLANI': 'hidden field', 'PREC_ALTI': 'hidden field', 'NB_LOGTS': 'hidden field', 'NB_ETAGES': 'hidden field', 'MAT_MURS': 'hidden field', 'MAT_TOITS': 'hidden field', 'HAUTEUR': 'hidden field', 'Z_MIN_SOL': 'hidden field', 'Z_MIN_TOIT': 'hidden field', 'Z_MAX_TOIT': 'hidden field', 'Z_MAX_SOL': 'hidden field', 'ORIGIN_BAT': 'hidden field', 'APP_FF': 'hidden field', 'IDS_RNB': 'hidden field', 'SRAFCE': 'hidden field', 'fid_2': 'hidden field', 'idcar_200m': 'hidden field', 'idcar_1km': 'hidden field', 'idcar_nat': 'hidden field', 'i_est_200': 'hidden field', 'i_est_1km': 'hidden field', 'lcog_geo': 'hidden field', 'ind': 'hidden field', 'men': 'hidden field', 'men_pauv': 'hidden field', 'men_1ind': 'hidden field', 'men_5ind': 'hidden field', 'men_prop': 'hidden field', 'men_fmp': 'hidden field', 'ind_snv': 'hidden field', 'men_surf': 'hidden field', 'men_coll': 'hidden field', 'men_mais': 'hidden field', 'log_av45': 'hidden field', 'log_45_70': 'hidden field', 'log_70_90': 'hidden field', 'log_ap90': 'hidden field', 'log_inc': 'hidden field', 'log_soc': 'hidden field', 'ind_0_3': 'hidden field', 'ind_4_5': 'hidden field', 'ind_6_10': 'hidden field', 'ind_11_17': 'hidden field', 'ind_18_24': 'hidden field', 'ind_25_39': 'hidden field', 'ind_40_54': 'hidden field', 'ind_55_64': 'hidden field', 'ind_65_79': 'hidden field', 'ind_80p': 'hidden field', 'ind_inc': 'hidden field', 'surf_bat': 'hidden field', 'surf_tot_carreau_bat_None': 'hidden field', 'pop_estime': 'inline label - always visible', 'fid_3': 'hidden field', 'ID_2': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_CAN': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SUPERF_CAD': 'hidden field', 'DATE_CREAT_2': 'hidden field', 'DATE_MAJ_2': 'hidden field', 'DATE_APP_2': 'hidden field', 'DATE_CONF_2': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'CODE_SIREN': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_LigneactuelleZ_4.set('fieldLabels', {'fid': 'hidden field', 'code': 'hidden field', 'description': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'route_color': 'hidden field', 'route_id': 'hidden field', 'route_long_name': 'header label - always visible', 'route_short_name': 'inline label - always visible', 'route_text_color': 'hidden field', 'wheelchair_boarding': 'hidden field', });
lyr_Nouveautronon_5.set('fieldLabels', {'fid': 'no label', 'Longueur': 'no label', });
lyr_Arrtpropospourlextensiondelaligne_6.set('fieldLabels', {'fid': 'no label', });
lyr_Arrtprsentsurlerseauactuel_7.set('fieldLabels', {'fid': 'hidden field', 'code': 'hidden field', 'descriptio': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'route_colo': 'hidden field', 'route_id': 'hidden field', 'route_long': 'inline label - always visible', 'route_shor': 'inline label - always visible', 'route_text': 'hidden field', 'wheelchair': 'hidden field', });
lyr_Arrtprsentsurlerseauactuel_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});