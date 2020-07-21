export class Constant {
  // tslint:disable-next-line:max-line-length
  public static EMAIL_REG_EX = /(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|('.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  public static CRITICAL_HEALTH = 500;
  public static ATTENTION_HEALTH = 350;
  public static OK_HEALTH = 200;

  public static USA = {
    maxBounds: [
      [5.499550, -167.276413], //Southwest
      [83.162102, -52.233040]  //Northeast
    ],
    centerLat: 38.9072,
    centerLong: -77.0369,
  };

  public static washingtonCoOrds = {
    'type': 'FeatureCollection',
    'name': 'Public Safety Towers',
    'crs': {'type': 'name', 'properties': {'name': 'urn:ogc:def:crs:OGC:1.3:CRS84'}},
    'features': [
      {
        'type': 'Feature',
        'properties': {
          'Name': 'Reeves Center',
          'description': '20001 14th St NW'
        }, 'geometry': {'type': 'Point', 'coordinates': [38.917333333333332, -77.032527777777773]}
      },
      {
        'type': 'Feature',
        'properties': {'Name': '4D Public Safety Site', 'description': '6001 Georgia Ave NW'},
        'geometry': {'type': 'Point', 'coordinates': [38.963025, -77.026694444444445]}
      },
      {
        'type': 'Feature',
        'properties': {'Name': 'GW Hospital', 'description': '2150 Pennsylvania Ave NW'},
        'geometry': {'type': 'Point', 'coordinates': [38.900983333333329, -77.04695]}
      },
      {
        'type': 'Feature',
        'properties': {'Name': 'UDC Public Safety', 'description': '4200 Connecticut Ave NW'},
        'geometry': {'type': 'Point', 'coordinates': [38.943511111111107, -77.065113888888888]}
      },
      {
        'type': 'Feature',
        'properties': {
          'Name': '1700 Rhode Island Ave. Public Safety Site',
          'description': '1700 Rhode Island Ave NE'
        },
        'geometry': {'type': 'Point', 'coordinates': [38.927322222222223, -76.980419444444451]}
      },
      {
        'type': 'Feature',
        'properties': {'Name': 'Georgetown Hospital', 'description': '3800 Reservoir Rd NW'},
        'geometry': {'type': 'Point', 'coordinates': [38.911647222222221, -77.075405555555548]}
      },
      {
        'type': 'Feature',
        'properties': {'Name': 'One Judiciary Square', 'description': '441 4th St NW'},
        'geometry': {'type': 'Point', 'coordinates': [38.895369444444441, -77.01565]}
      },
      {
        'type': 'Feature',
        'properties': {'Name': 'Fletcher Johnson School', 'description': '4650 Benning Rd SE'},
        'geometry': {'type': 'Point', 'coordinates': [38.882625, -76.9343]}
      },
      {
        'type': 'Feature',
        'properties': {'Name': 'Sibley Hospital', 'description': '5255 Loughboro Rd NW'},
        'geometry': {'type': 'Point', 'coordinates': [38.936658333333327, -77.111280555555552]}
      },
      {
        'type': 'Feature',
        'properties': {'Name': 'St. Elizabeth\'s Tower', 'description': '2901 Robinson Pl SE'},
        'geometry': {'type': 'Point', 'coordinates': [38.848241666666667, -76.98789166666667]}
      }
    ]
  };
  public static laCoOrds = {
    'type': 'FeatureCollection',
    'name': 'Public Safety Towers',
    'crs': {'type': 'name', 'properties': {'name': 'urn:ogc:def:crs:OGC:1.3:CRS84'}},
    'features': [
      {
        'type': 'Feature',
        'properties': {
          'Name': '100 Wilshire',
          'description': ''
        }, 'geometry': {'type': 'Point', 'coordinates': [34.01683, -118.50023]}
      },
      {
        'type': 'Feature',
        'properties': {'Name': 'Baldwin Hills', 'description': ''},
        'geometry': {'type': 'Point', 'coordinates': [34.00668, -118.36234]}
      },
      {
        'type': 'Feature',
        'properties': {'Name': 'Beverly Glen', 'description': ''},
        'geometry': {'type': 'Point', 'coordinates': [34.12915, -118.44257]}
      },
      {
        'type': 'Feature',
        'properties': {'Name': 'City Hall', 'description': ''},
        'geometry': {'type': 'Point', 'coordinates': [34.0536, -118.24256]}
      },
      {
        'type': 'Feature',
        'properties': {
          'Name': 'KSKQ Radio Site',
          'description': ''
        },
        'geometry': {'type': 'Point', 'coordinates': [34.07869, -118.18558]}
      },
      {
        'type': 'Feature',
        'properties': {'Name': 'MT. Washington', 'description': ''},
        'geometry': {'type': 'Point', 'coordinates': [34.10417, -118.21497]}
      },
      {
        'type': 'Feature',
        'properties': {'Name': 'Oat Mountain', 'description': ''},
        'geometry': {'type': 'Point', 'coordinates': [34.32833, -118.59812]}
      },
      {
        'type': 'Feature',
        'properties': {'Name': 'Verdugo Peak', 'description': ''},
        'geometry': {'type': 'Point', 'coordinates': [34.2198, -117.29053]}
      },
      {
        'type': 'Feature',
        'properties': {'Name': 'San Pedro Hill', 'description': ''},
        'geometry': {'type': 'Point', 'coordinates': [33.74639, -118.33563]}
      }
    ]
  };
  public static sanDiegoCoOrds = {
    'type': 'FeatureCollection',
    'name': 'Public Safety Towers',
    'crs': {'type': 'name', 'properties': {'name': 'urn:ogc:def:crs:OGC:1.3:CRS84'}},
    'features': [
      {
        'type': 'Feature',
        'properties': {
          'Name': 'Cowles Mountain',
          'description': 'Cowles Mountain - Mountain Peak \n' +
            '\n' +
            'San Diego, CA 92119 \n' +
            '\n' +
            'Cowles Mountain is a prominent mountain located in the San Carlos neighborhood, within the City of San Diego, San Diego County, California. The 1,593-foot summit is the highest point of the city of San Diego. \n' +
            'Elevation: 1,594′ \n' +
            'Did you know: For many years Cowles Mountain was locally known as "S" Mountain. \n' +
            'Prominence: 991′ \n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '4.5 64 reviews',
          'placePageUri': 'https://www.google.com/earth/rpc/entity?lat=32.8134238&amp;lng=-117.03055559999999&amp;fid=0x80d957cb5c163f3d:0x14922199dd16ce0d&amp;q=Cowles Mountain, San Diego, CA 92119&amp;hl=en&amp;gl=us&amp;client=earth-client&amp;cv=7.3.1.4507&amp;useragent=GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default)',
          'photo': 'https://lh6.googleusercontent.com/proxy/DFZioPLOBNWzX950kqSO2YFviRC9FgIFKkydkDEGV4J234fIpWClpqory1f-_DwvU2vTbEU4LPXy3HSGbpJgA1HV982IjPN5P24Kz7tZgBfpSnEYS4DXyxJXQHfHUCDcgBG-ccu74kH89_o8YkIIEHJhfE5jcADG6HlCljbq5dKGwjFlto76sn41kx-bM4EbjyndYa52HOAII5_rS0JUUUfWX6HHOjNym1XTmSoOwp_9HKNQEaW_DjbKRzGsXWmmYr7agThPXe4BQqIX1mLj8zadvBonAR_tV6xYVn6h0yP30hAQYsANB8KDAyMfbdxkFnDs3oFGi1C2efW5BsW28EbXJhWIV6k=w314-h200'
        }, 'geometry': {'type': 'Point', 'coordinates': [32.8134238, -117.03055559999999]}
      },
      {
        'type': 'Feature',
        'properties': {
          'Name': 'Encanto', 'description': 'Aviation Dr \n' +
            '\n' +
            'San Diego, CA 92114 \n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '\n',
          'placePageUri': 'https://www.google.com/earth/rpc/entity?lat=32.7041671&amp;lng=-117.05301240000001&amp;fid=0x80d9510c8a5c7c1d:0x346bc64b2dceeef2&amp;q=Aviation Dr, San Diego, CA 92114&amp;hl=en&amp;gl=us&amp;client=earth-client&amp;cv=7.3.1.4507&amp;useragent=GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default)'
        },
        'geometry': {'type': 'Point', 'coordinates': [32.7041671, -117.05301240000001]}
      },
      {
        'type': 'Feature',
        'properties': {
          'Name': 'Black Mountain', 'description': '9700 Laurentian Dr \n' +
            '\n' +
            'San Diego, CA 92129 \n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '',
          'placePageUri': 'https://www.google.com/earth/rpc/entity?lat=32.97474809999999&amp;lng=-117.12534710000001&amp;fid=0x80dbf77fed01d327:0xf48519161c3ff6e0&amp;q=9700 Laurentian Dr, San Diego, CA 92129&amp;hl=en&amp;gl=us&amp;client=earth-client&amp;cv=7.3.1.4507&amp;useragent=GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default)'
        },
        'geometry': {'type': 'Point', 'coordinates': [32.97474809999999, -117.12534710000001]}
      },
      {
        'type': 'Feature',
        'properties': {
          'Name': 'San Ysidro View', 'description': '4350 Otay Mesa Rd \n' +
            '\n' +
            'San Diego, CA 92154 \n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '',
          'placePageUri': 'https://www.google.com/earth/rpc/entity?lat=32.5624457&amp;lng=-117.04014939999999&amp;fid=0x80d94925b338a2df:0x2f0d609b53e0d988&amp;q=4350 Otay Mesa Rd, San Diego, CA 92154&amp;hl=en&amp;gl=us&amp;client=earth-client&amp;cv=7.3.1.4507&amp;useragent=GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default)'
        },
        'geometry': {'type': 'Point', 'coordinates': [32.5624457, -117.04014939999999]}
      },
      {
        'type': 'Feature',
        'properties': {
          'Name': 'Mount Soledad',
          'description': '2110 Via Casa Alta \n' +
            '\n' +
            'La Jolla, CA 92037 \n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '',
          'placePageUri': 'https://www.google.com/earth/rpc/entity?lat=32.8392678&amp;lng=-117.25038830000001&amp;fid=0x80dc0169f0d47f77:0x9c06816268c8b459&amp;q=2110 Via Casa Alta, La Jolla, CA 92037&amp;hl=en&amp;gl=us&amp;client=earth-client&amp;cv=7.3.1.4507&amp;useragent=GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default)',
          'photo': 'https://lh4.googleusercontent.com/proxy/NbpTM3wPoJmVVYNmptofjYp_YE06IBydyG0…Aul6QTY-Z1APsI2Zqiaff_yup8bg53A5QWevTJbKhuCp-m6DdijM_XHVDyUo8Kcs=w314-h200'
        },
        'geometry': {'type': 'Point', 'coordinates': [32.8392678, -117.25038830000001]}
      },
      {
        'type': 'Feature',
        'properties': {
          'Name': 'City Admin Building', 'description': '202 C St \n' +
            '\n' +
            'San Diego, CA 92101 \n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '',
          'placePageUri': 'https://www.google.com/earth/rpc/entity?lat=32.7169145&amp;lng=-117.162969&amp;fid=0x80d954a861dd453f:0xb5691c2323cfd58f&amp;q=202 C St, San Diego, CA 92101&amp;hl=en&amp;gl=us&amp;client=earth-client&amp;cv=7.3.1.4507&amp;useragent=GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default)'
        },
        'geometry': {'type': 'Point', 'coordinates': [32.7169145, -117.162969]}
      }
    ]
  };
  public static PUBLIC_SAFETY_CLUSTER = 'Public Safety';
  public static AIRTOWER_WATCH_CLUSTER = 'Airtower Watch';
  public static AIRTOWER_COMPLIANCE_CLUSTER = 'Airtower Compliance';
  public static AIRTOWER_OPTIMIZE_CLUSTER = 'Airtower Compliance';
  public static AIRTOWER_LOCKDOWN_CLUSTER = 'Airtower LockDown';

}
