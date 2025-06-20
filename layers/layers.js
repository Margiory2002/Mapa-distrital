var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ProvinciasdeIca_1 = new ol.format.GeoJSON();
var features_ProvinciasdeIca_1 = format_ProvinciasdeIca_1.readFeatures(json_ProvinciasdeIca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinciasdeIca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinciasdeIca_1.addFeatures(features_ProvinciasdeIca_1);
var lyr_ProvinciasdeIca_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvinciasdeIca_1, 
                style: style_ProvinciasdeIca_1,
                popuplayertitle: 'Provincias de Ica',
                interactive: true,
                title: '<img src="styles/legend/ProvinciasdeIca_1.png" /> Provincias de Ica'
            });
var format_Hidrografia_2 = new ol.format.GeoJSON();
var features_Hidrografia_2 = format_Hidrografia_2.readFeatures(json_Hidrografia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrografia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografia_2.addFeatures(features_Hidrografia_2);
var lyr_Hidrografia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hidrografia_2, 
                style: style_Hidrografia_2,
                popuplayertitle: 'Hidrografia',
                interactive: true,
                title: '<img src="styles/legend/Hidrografia_2.png" /> Hidrografia'
            });
var format_ie_Ica_3 = new ol.format.GeoJSON();
var features_ie_Ica_3 = format_ie_Ica_3.readFeatures(json_ie_Ica_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ie_Ica_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ie_Ica_3.addFeatures(features_ie_Ica_3);
var lyr_ie_Ica_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ie_Ica_3, 
                style: style_ie_Ica_3,
                popuplayertitle: 'ie_Ica',
                interactive: true,
                title: '<img src="styles/legend/ie_Ica_3.png" /> ie_Ica'
            });
var format_red_vial_dep_4 = new ol.format.GeoJSON();
var features_red_vial_dep_4 = format_red_vial_dep_4.readFeatures(json_red_vial_dep_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_red_vial_dep_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_vial_dep_4.addFeatures(features_red_vial_dep_4);
var lyr_red_vial_dep_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_vial_dep_4, 
                style: style_red_vial_dep_4,
                popuplayertitle: 'red_vial_dep',
                interactive: true,
                title: '<img src="styles/legend/red_vial_dep_4.png" /> red_vial_dep'
            });
var format_red_vial_vecinal_5 = new ol.format.GeoJSON();
var features_red_vial_vecinal_5 = format_red_vial_vecinal_5.readFeatures(json_red_vial_vecinal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_red_vial_vecinal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_vial_vecinal_5.addFeatures(features_red_vial_vecinal_5);
var lyr_red_vial_vecinal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_vial_vecinal_5, 
                style: style_red_vial_vecinal_5,
                popuplayertitle: 'red_vial_vecinal',
                interactive: true,
                title: '<img src="styles/legend/red_vial_vecinal_5.png" /> red_vial_vecinal'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ProvinciasdeIca_1.setVisible(true);lyr_Hidrografia_2.setVisible(true);lyr_ie_Ica_3.setVisible(true);lyr_red_vial_dep_4.setVisible(true);lyr_red_vial_vecinal_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ProvinciasdeIca_1,lyr_Hidrografia_2,lyr_ie_Ica_3,lyr_red_vial_dep_4,lyr_red_vial_vecinal_5];
lyr_ProvinciasdeIca_1.set('fieldAliases', {'fid': 'Numero de distrito del ', 'COUNT': 'Numero de distrito del ', 'FIRST_IDPR': 'UBIGEO de la provincia', 'NOMBPROV': 'Nombre de la provincia', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'Superficie en \'Ha\'', 'enlaces': 'Información del distrito:', 'fotos': 'Fotos del distrito:', 'videos': 'video del distrito:', 'Reportes': 'Reporte de desastres del distrito:', });
lyr_Hidrografia_2.set('fieldAliases', {'fid': 'fid', 'Rasgo_Prin': 'Rasgo_Prin', 'Rasgo_Secu': 'Rasgo_Secu', 'Nombre': 'Nombre de la Quebrada:', 'Longitud': 'Longitud:', });
lyr_ie_Ica_3.set('fieldAliases', {'fid': 'fid', 'CODLOCAL': 'código local de IE', 'NOMCPSIG': 'Centro poblado', 'FUENTE_LOC': 'FUENTE_LOC', 'FTE_LOCD': 'FTE_LOCD', 'X_LONGITUD': 'Longitud', 'Y_LATITUD': 'Y_LATITUD', 'CORD_YX': 'Coordenadas', 'NALT_LOCAL': 'NALT_LOCAL', 'CEN_EDU_L': 'Nombre del Centro Educativo', 'CODCPSIG': 'CODCPSIG', });
lyr_red_vial_dep_4.set('fieldAliases', {'fid': 'fid', 'RODADURA': 'RODADURA', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO de la red departamental:', 'DEP': 'DEP', 'PROV': 'Provincia:', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'Longitud del tramo:', 'OBS': 'OBS', 'SENTIDO': 'SENTIDO', 'BASE': 'BASE', 'DATA': 'DATA', 'FECHA_ACTU': 'FECHA_ACTU', 'FUENTE': 'FUENTE', 'COD_RODADU': 'COD_RODADU', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', });
lyr_red_vial_vecinal_5.set('fieldAliases', {'fid': 'fid', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO de la red vecinal:', 'DEP': 'DEP', 'PROV': 'Provincia de pertencia:', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'Longitud:', 'OBS': 'OBS', });
lyr_ProvinciasdeIca_1.set('fieldImages', {'fid': 'Hidden', 'COUNT': 'Hidden', 'FIRST_IDPR': 'TextEdit', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'Hidden', 'LAST_DCTO': 'Hidden', 'LAST_LEY': 'Hidden', 'FIRST_FECH': 'Hidden', 'LAST_FECHA': 'Hidden', 'MIN_SHAPE_': 'Hidden', 'ha': 'Hidden', 'enlaces': 'TextEdit', 'fotos': 'ExternalResource', 'videos': 'TextEdit', 'Reportes': 'TextEdit', });
lyr_Hidrografia_2.set('fieldImages', {'fid': 'Hidden', 'Rasgo_Prin': 'Hidden', 'Rasgo_Secu': 'Hidden', 'Nombre': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_ie_Ica_3.set('fieldImages', {'fid': 'Hidden', 'CODLOCAL': 'TextEdit', 'NOMCPSIG': 'TextEdit', 'FUENTE_LOC': 'Hidden', 'FTE_LOCD': 'Hidden', 'X_LONGITUD': 'Hidden', 'Y_LATITUD': 'Hidden', 'CORD_YX': 'TextEdit', 'NALT_LOCAL': 'Hidden', 'CEN_EDU_L': 'TextEdit', 'CODCPSIG': 'Hidden', });
lyr_red_vial_dep_4.set('fieldImages', {'fid': 'Hidden', 'RODADURA': 'Hidden', 'COD_DS11': 'Hidden', 'COD_DS12': 'Hidden', 'TRAY_DS12': 'Hidden', 'TRAY_DS11': 'Hidden', 'UBIGEO': 'TextEdit', 'DEP': 'Hidden', 'PROV': 'TextEdit', 'COD_DEP': 'Hidden', 'COD_PROV': 'Hidden', 'LONG_KM': 'TextEdit', 'OBS': 'Hidden', 'SENTIDO': 'Hidden', 'BASE': 'Hidden', 'DATA': 'Hidden', 'FECHA_ACTU': 'Hidden', 'FUENTE': 'Hidden', 'COD_RODADU': 'Hidden', 'NOMBDIST': 'Hidden', 'CAPITAL': 'Hidden', });
lyr_red_vial_vecinal_5.set('fieldImages', {'fid': 'Hidden', 'COD_DS11': 'Hidden', 'COD_DS12': 'Hidden', 'TRAY_DS12': 'Hidden', 'TRAY_DS11': 'Hidden', 'UBIGEO': 'TextEdit', 'DEP': 'Hidden', 'PROV': 'TextEdit', 'COD_DEP': 'Hidden', 'COD_PROV': 'Hidden', 'LONG_KM': 'TextEdit', 'OBS': 'Hidden', });
lyr_ProvinciasdeIca_1.set('fieldLabels', {'fid': 'header label - always visible', 'COUNT': 'header label - always visible', 'FIRST_IDPR': 'header label - always visible', 'NOMBPROV': 'header label - always visible', 'FIRST_NOMB': 'no label', 'LAST_DCTO': 'no label', 'LAST_LEY': 'no label', 'FIRST_FECH': 'no label', 'LAST_FECHA': 'no label', 'MIN_SHAPE_': 'no label', 'ha': 'header label - always visible', 'enlaces': 'header label - always visible', 'fotos': 'header label - always visible', 'videos': 'header label - always visible', 'Reportes': 'header label - always visible', });
lyr_Hidrografia_2.set('fieldLabels', {'fid': 'no label', 'Rasgo_Prin': 'no label', 'Rasgo_Secu': 'no label', 'Nombre': 'header label - always visible', 'Longitud': 'header label - always visible', });
lyr_ie_Ica_3.set('fieldLabels', {'fid': 'no label', 'CODLOCAL': 'header label - always visible', 'NOMCPSIG': 'header label - always visible', 'FUENTE_LOC': 'no label', 'FTE_LOCD': 'no label', 'X_LONGITUD': 'no label', 'Y_LATITUD': 'no label', 'CORD_YX': 'header label - always visible', 'NALT_LOCAL': 'no label', 'CEN_EDU_L': 'header label - always visible', 'CODCPSIG': 'no label', });
lyr_red_vial_dep_4.set('fieldLabels', {'fid': 'no label', 'RODADURA': 'no label', 'COD_DS11': 'no label', 'COD_DS12': 'no label', 'TRAY_DS12': 'no label', 'TRAY_DS11': 'no label', 'UBIGEO': 'header label - always visible', 'DEP': 'no label', 'PROV': 'header label - always visible', 'COD_DEP': 'no label', 'COD_PROV': 'no label', 'LONG_KM': 'header label - always visible', 'OBS': 'no label', 'SENTIDO': 'no label', 'BASE': 'no label', 'DATA': 'no label', 'FECHA_ACTU': 'no label', 'FUENTE': 'no label', 'COD_RODADU': 'no label', 'NOMBDIST': 'no label', 'CAPITAL': 'no label', });
lyr_red_vial_vecinal_5.set('fieldLabels', {'fid': 'no label', 'COD_DS11': 'no label', 'COD_DS12': 'no label', 'TRAY_DS12': 'no label', 'TRAY_DS11': 'no label', 'UBIGEO': 'header label - always visible', 'DEP': 'no label', 'PROV': 'header label - always visible', 'COD_DEP': 'no label', 'COD_PROV': 'no label', 'LONG_KM': 'header label - always visible', 'OBS': 'no label', });
lyr_red_vial_vecinal_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});