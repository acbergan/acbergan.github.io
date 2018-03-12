// Find lat, long using right click "What's here" button in google maps

var places = [
  {
    'name': 'Freedom Park',
    'lat': 37.316438,
    'lng': -76.791258,
    'tags': ['mountain-biking', 'VA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'New Quarter Park',
    'lat': 37.293449,
    'lng': -76.645120,
    'tags': ['mountain-biking', 'VA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Virginia Beach',
    'lat': 36.855855,
    'lng': -75.976014,
    'tags': ['VA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Norfolk',
    'lat': 36.847957, 
    'lng': -76.291656,
    'tags': ['VA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Williamsburg',
    'lat': 37.271416, 
    'lng': -76.701304,
    'tags': ['VA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'York River State Park',
    'lat': 37.403575, 
    'lng': -76.717773,
    'tags': ['mountain-biking', 'VA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Pocahontas State Park',
    'lat': 37.371182,
    'lng': -77.576895,
    'tags': ['mountain-biking', 'VA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'James River Loop',
    'lat': 37.524500,
    'lng': -77.470937,
    'tags': ['mountain-biking', 'VA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Shenandoah National Park',
    'lat': 38.253887,
    'lng': -78.683338,
    'tags': ['hiking', 'backpacking', 'national-park', 'VA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Elizabeth Furnace',
    'lat': 38.927552,
    'lng': -78.331869,
    'tags': ['hiking', 'backpacking', 'VA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Douthat State Park',
    'lat': 37.891673,
    'lng': -79.803823,
    'tags': ['mountain-biking', 'VA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Washington, DC',
    'lat': 38.896663,
    'lng': -77.037500,
    'tags': ['tourism', 'DC'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Annapolis',
    'lat': 38.979114,
    'lng': -76.490243,
    'tags': ['sailing', 'VA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Baltimore',
    'lat': 39.282710,
    'lng': -76.601264,
    'tags': ['work-travel', 'MD'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Ocean City',
    'lat': 38.331976,
    'lng': -75.085838,
    'tags': ['tourism', 'MD'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Chincoteague Island',
    'lat': 37.936495,
    'lng': -75.369251,
    'tags': ['tourism', 'VA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Fenwick Island',
    'lat': 38.460324,
    'lng': -75.052364,
    'tags': ['tourism', 'DE'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Bethany Beach',
    'lat': 38.537707,
    'lng': -75.057342,
    'tags': ['tourism', 'DE'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Dewey Beach',
    'lat': 38.689276,
    'lng': -75.074508,
    'tags': ['sailing', 'DE'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Boston',
    'lat': 42.356464,
    'lng': -71.063726,
    'tags': ['work-travel', 'tourism', 'MA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Newburyport',
    'lat': 42.812007,
    'lng': -70.872238,
    'tags': ['wedding', 'tourism', 'MA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'North Conway',
    'lat': 44.052052,
    'lng': -71.127230,
    'tags': ['hiking', 'NH'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'White Mountains',
    'lat': 44.266457,
    'lng': -71.248079,
    'tags': ['hiking', 'NH'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Franconia Notch State Park',
    'lat': 44.140938,
    'lng': -71.685129,
    'tags': ['backpacking', 'NH'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Rumney Rocks',
    'lat': 43.802246,
    'lng': -71.830599,
    'tags': ['climbing', 'NH'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'St. Johnsbury',
    'lat': 44.421086,
    'lng': -72.018278,
    'tags': ['tourism', 'VT'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'East Burke',
    'lat': 44.587650,
    'lng': -71.941460,
    'tags': ['tourism', 'wedding', 'mountain-biking', 'VT'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Burlington',
    'lat': 44.480135,
    'lng': -73.218635,
    'tags': ['tourism', 'VT'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Rutland',
    'lat': 43.609336,
    'lng': -72.972816,
    'tags': ['tourism', 'VT'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Killington',
    'lat': 43.620583,
    'lng': -72.790426,
    'tags': ['skiing', 'VT'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Stowe',
    'lat': 44.529490,
    'lng': -72.782632,
    'tags': ['skiing', 'VT'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Lake Placid',
    'lat': 44.281121,
    'lng': -73.981945,
    'tags': ['skiing', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Shawgunks',
    'lat': 41.739067,
    'lng': -74.197105,
    'tags': ['climbing', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Gore',
    'lat': 43.672551,
    'lng': -74.007336,
    'tags': ['skiing', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Montreal',
    'lat': 45.508116,
    'lng': -73.570526,
    'tags': ['tourism', 'CAN'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Ottawa',
    'lat': 45.425294,
    'lng': -75.695177,
    'tags': ['tourism', 'CAN'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Stony Lake',
    'lat': 44.537691,
    'lng': -78.169714,
    'tags': ['tourism', 'CAN'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Toronto',
    'lat': 43.651212,
    'lng': -79.368823,
    'tags': ['tourism', 'CAN'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Youngstown',
    'lat': 43.248448,
    'lng': -79.051952,
    'tags': ['sailing', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'US Merchant Marine Academy, Kings Point',
    'lat': 40.812504,
    'lng': -73.762979,
    'tags': ['sailing', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'SUNY Maritime College',
    'lat': 40.808931,
    'lng': -73.800916,
    'tags': ['sailing', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'New York City',
    'lat': 40.778066,
    'lng': -73.973178,
    'tags': ['tourism', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Perth Amboy',
    'lat': 40.505375,
    'lng': -74.263372,
    'tags': ['sailing', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'London',
    'lat': 51.502566,
    'lng': -0.125975,
    'tags': ['tourism', 'GBR'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Copenhagen',
    'lat': 55.679563,
    'lng': 12.582030,
    'tags': ['tourism', 'work-travel', 'DEN'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Warsaw',
    'lat': 52.231692,
    'lng': 21.011065,
    'tags': ['tourism', 'POL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Krakow',
    'lat': 50.062941,
    'lng': 19.940217,
    'tags': ['tourism', 'wedding', 'POL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Seoul',
    'lat': 37.549795,
    'lng': 126.992307,
    'tags': ['tourism', 'KOR'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Seoul',
    'lat': 37.549795,
    'lng': 126.992307,
    'tags': ['tourism', 'KOR'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Kuala Lumpur',
    'lat': 3.154920,
    'lng': 101.715149,
    'tags': ['tourism', 'MYS'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Bali',
    'lat': -8.683140,
    'lng': 115.151778,
    'tags': ['tourism', 'IDN'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Nusa Lembongan',
    'lat': -8.683902,
    'lng': 115.447265,
    'tags': ['tourism', 'IDN'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Sydney',
    'lat': -33.867074,
    'lng': 151.207262,
    'tags': ['tourism', 'AUS'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Sydney',
    'lat': -33.867074,
    'lng': 151.207262,
    'tags': ['tourism', 'AUS'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Echo Point',
    'lat': -33.731403,
    'lng': 150.311865,
    'tags': ['tourism', 'AUS'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Brisbane',
    'lat': -27.471459,
    'lng': 153.026035,
    'tags': ['tourism', 'AUS'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Noosa Heads',
    'lat': -26.396271,
    'lng': 153.091309,
    'tags': ['tourism', 'AUS'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Cairns',
    'lat': -16.920647,
    'lng': 145.772311,
    'tags': ['tourism', 'AUS'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Palm Cove',
    'lat': -16.742332, 
    'lng': 145.671460,
    'tags': ['tourism', 'AUS'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Port Douglas',
    'lat': -16.484171,
    'lng': 145.464981,
    'tags': ['tourism', 'AUS'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Cape Tribulation',
    'lat': -16.077295, 
    'lng': 145.470260,
    'tags': ['tourism', 'AUS'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Australia Zoo',
    'lat': -26.835771, 
    'lng': 152.963070,
    'tags': ['tourism', 'AUS'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Point Abino',
    'lat': 42.856834,
    'lng': -79.093552,
    'tags': ['sailing', 'vacation', 'CAN'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Rochester',
    'lat': 43.157118, 
    'lng': -77.607308,
    'tags': ['wedding', 'vacation', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Ithaca',
    'lat': 42.447601, 
    'lng': -76.503783,
    'tags': ['sailing', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Watkins Glen',
    'lat': 42.380113,
    'lng': -76.872168,
    'tags': ['vacation', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Geneva',
    'lat': 42.864933,
    'lng': -76.983061,
    'tags': ['sailing', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Ellicottville',
    'lat': 42.274284,
    'lng': -78.672810,
    'tags': ['mountain-biking', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Holimont',
    'lat': 42.273043,
    'lng': -78.689434,
    'tags': ['skiing', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Holiday Valley',
    'lat': 42.257990,
    'lng': -78.675529,
    'tags': ['skiing', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Cleveland',
    'lat': 41.503379,
    'lng': -81.695337,
    'tags': ['sailing', 'work-travel', 'OH'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Peak n Peak',
    'lat': 42.061925, 
    'lng': -79.736173,
    'tags': ['sailing', 'NY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Philadelphia',
    'lat': 39.951128,
    'lng': -75.165600,
    'tags': ['lived', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Essington',
    'lat': 39.860136,
    'lng': -75.299153,
    'tags': ['sailing', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Concordville',
    'lat': 39.884246,
    'lng': -75.530896,
    'tags': ['work', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Kennett Square',
    'lat': 39.849989,
    'lng': -75.710282,
    'tags': ['work', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'West Chester',
    'lat': 39.960257,
    'lng': -75.605654,
    'tags': ['PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Marsh Creek State Park',
    'lat': 40.064698,
    'lng': -75.724959,
    'tags': ['PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Valley Forge National Historic Park',
    'lat': 40.096746,
    'lng': -75.449271,
    'tags': ['PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Conshohocken',
    'lat': 40.076653,
    'lng': -75.304732,
    'tags': ['PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Wissahickon Valley Park',
    'lat': 40.053136,
    'lng': -75.217013,
    'tags': ['mountain-biking', 'climbing', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Pennypack Park',
    'lat': 40.049851,
    'lng': -75.037112,
    'tags': ['mountain-biking', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Phoenixville',
    'lat': 40.127926,
    'lng': -75.514159,
    'tags': ['PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Royersford',
    'lat': 40.182965,
    'lng': -75.541968,
    'tags': ['PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Evansburg State Park',
    'lat': 40.194833,
    'lng': -75.402922,
    'tags': ['hiking', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Nockamixon State Park',
    'lat': 40.452002,
    'lng': -75.238127,
    'tags': ['climbing', 'sailing', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Ralph Stover State Park',
    'lat': 40.440473,
    'lng': -75.093932,
    'tags': ['climbing', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Allentown',
    'lat': 40.606289,
    'lng': -75.491757,
    'tags': ['PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Bethlehem',
    'lat': 40.623099,
    'lng': -75.378289,
    'tags': ['PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Easton',
    'lat': 40.684829,
    'lng': -75.224309,
    'tags': ['PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Trexler Nature Preserve',
    'lat': 40.656999,
    'lng': -75.622820,
    'tags': ['mountain-biking', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Bake Oven Knob',
    'lat': 40.747153,
    'lng': -75.733542,
    'tags': ['hiking', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'The Pinnacle Hike',
    'lat': 40.612165,
    'lng': -75.914369,
    'tags': ['hiking', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Delaware Water Gap',
    'lat': 41.099709,
    'lng': -74.955503,
    'tags': ['hiking', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Blue Mountain',
    'lat': 40.822456,
    'lng': -75.512484,
    'tags': ['skiing', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Camelback Mountain',
    'lat': 41.051371,
    'lng': -75.355229,
    'tags': ['skiing', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Falling Water',
    'lat': 39.906077,
    'lng': -79.467964,
    'tags': ['tourism', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Seven Springs',
    'lat': 40.022726,
    'lng': -79.298197,
    'tags': ['vacation', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Birdsboro',
    'lat': 40.249627,
    'lng': -75.822719,
    'tags': ['climbing', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Hersey',
    'lat': 40.284846,
    'lng': -76.652788,
    'tags': ['climbing', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Jim Thorpe',
    'lat': 40.887085,
    'lng': -75.769352,
    'tags': ['hiking', 'PA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'New Jersey Motorsports Park',
    'lat': 39.358385,
    'lng': -75.061849,
    'tags': ['NJ'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Avalon',
    'lat': 39.096723,
    'lng': -74.722388,
    'tags': ['NJ'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Ocean City',
    'lat': 39.273288,
    'lng': -74.578193,
    'tags': ['NJ'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Atlantic City',
    'lat': 39.356693,
    'lng': -74.433311,
    'tags': ['NJ'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Egg Harbor',
    'lat': 39.441059,
    'lng': -74.568408,
    'tags': ['work', 'NJ'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Toms River',
    'lat': 39.948069,
    'lng': -74.194873,
    'tags': ['sailing', 'NJ'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Mantoloking',
    'lat': 40.036776,
    'lng': -74.052566,
    'tags': ['wedding', 'NJ'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Princeton',
    'lat': 40.352916,
    'lng': -74.663508,
    'tags': ['NJ'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'White Sulphur Springs',
    'lat': 37.792737,
    'lng': -80.301555,
    'tags': ['tourism', 'WV'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Lewisburg',
    'lat': 37.800198,
    'lng': -80.445408,
    'tags': ['tourism', 'WV'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'New River Gorge',
    'lat': 38.067531,
    'lng': -81.084331,
    'tags': ['climbing', 'WV'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Summersville Lake',
    'lat': 38.240516,
    'lng': -80.849155,
    'tags': ['climbing', 'WV'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Seneca Rocks',
    'lat': 38.833132,
    'lng': -79.376129,
    'tags': ['climbing', 'WV'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Lafayette',
    'lat': 40.412835,
    'lng': -86.899532,
    'tags': ['work-travel', 'IN'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Chicago',
    'lat': 41.875321,
    'lng': -87.627891,
    'tags': ['IL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Detroit',
    'lat': 42.323849,
    'lng': -83.070453,
    'tags': ['MI'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Red River Gorge',
    'lat': 37.794082,
    'lng': -83.707171,
    'tags': ['KY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Dayton',
    'lat': 39.761738,
    'lng': -84.192114,
    'tags': ['work-travel', 'OH'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Chattanooga',
    'lat': 35.039939,
    'lng': -85.308771,
    'tags': ['sailing', 'OH'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Durham',
    'lat': 35.991750,
    'lng': -78.901639,
    'tags': ['NC'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Greensboro',
    'lat': 36.070254,
    'lng': -79.791016,
    'tags': ['NC'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Winston-Salem',
    'lat': 36.096197,
    'lng': -80.240082,
    'tags': ['NC'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Moore\'s Wall',
    'lat': 36.394596,
    'lng': -80.267386,
    'tags': ['climbing', 'NC'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Asheville',
    'lat': 35.593122,
    'lng': -82.553401,
    'tags': ['NC'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Looking Glass',
    'lat': 35.304386,
    'lng': -82.794920,
    'tags': ['climbing', 'NC'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Greenwood',
    'lat': 34.186826,
    'lng': -82.164244,
    'tags': ['SC'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Charleston',
    'lat': 32.789109,
    'lng': -79.938732,
    'tags': ['SC'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Hilton Head',
    'lat': 32.181600,
    'lng': -80.725972,
    'tags': ['SC'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Orlando',
    'lat': 28.524694,
    'lng': -81.376911,
    'tags': ['FL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Cape Canaveral',
    'lat': 28.384334,
    'lng': -80.606839,
    'tags': ['FL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Cocoa Beach',
    'lat': 28.315143,
    'lng': -80.610272,
    'tags': ['FL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Tampa',
    'lat': 27.944705,
    'lng': -82.454602,
    'tags': ['FL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Tarpon Springs',
    'lat': 28.140529,
    'lng': -82.756554,
    'tags': ['FL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Sarasota',
    'lat': 27.332157,
    'lng': -82.534596,
    'tags': ['lived', 'FL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Lido Key',
    'lat': 27.336599,
    'lng': -82.574228,
    'tags': ['sailing', 'FL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Siesta Key',
    'lat': 27.264094,
    'lng': -82.548221,
    'tags': ['FL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Naples',
    'lat': 26.138658,
    'lng': -81.796429,
    'tags': ['FL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Everglades National Park',
    'lat': 25.246593,
    'lng': -80.887221,
    'tags': ['national-park', 'FL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Key Largo',
    'lat': 25.079460,
    'lng': -80.456127,
    'tags': ['sailing', 'FL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Fort Lauderdale',
    'lat': 26.133035,
    'lng': -80.104320,
    'tags': ['FL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Key West',
    'lat': 24.550402,
    'lng': -81.800746,
    'tags': ['FL'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'George Town',
    'lat': 19.287125,
    'lng': -81.299839,
    'tags': ['tourism', 'CYM'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Roatan',
    'lat': 16.317133,
    'lng': -86.535854,
    'tags': ['tourism', 'GTM'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Roatan',
    'lat': 16.317133,
    'lng': -86.535854,
    'tags': ['tourism', 'HND'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Santo Tomas de Castilla',
    'lat': 15.689443,
    'lng': -88.620424,
    'tags': ['tourism', 'GTM'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Johnson Space Center',
    'lat': 29.555216,
    'lng': -95.089596,
    'tags': ['tourism', 'TX'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'McGregor',
    'lat': 31.437764,
    'lng': -97.410879,
    'tags': ['tourism', 'TX'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Arlington',
    'lat': 32.726011,
    'lng': -97.106043,
    'tags': ['work-travel', 'TX'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Grapevine',
    'lat': 32.926095,
    'lng': -97.086144,
    'tags': ['work-travel', 'TX'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Badlands National Park',
    'lat': 43.829270,
    'lng': -102.343656,
    'tags': ['tourism', 'SD'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Custer State Park',
    'lat': 43.755467,
    'lng': -103.408607,
    'tags': ['wedding', 'SD'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Mount Rushmore',
    'lat': 43.878685,
    'lng': -103.459142,
    'tags': ['tourism', 'SD'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Fort Collins',
    'lat': 40.584385,
    'lng': -105.077318,
    'tags': ['CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Horsetooth Mountain',
    'lat': 40.538839,
    'lng': -105.196280,
    'tags': ['hiking', 'mountain-biking', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Estes Park',
    'lat': 40.369226,
    'lng': -105.518832,
    'tags': ['vacation', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'The Needles',
    'lat': 40.413287,
    'lng': -105.551276,
    'tags': ['climbing', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Winter Park',
    'lat': 39.887335,
    'lng': -105.761389,
    'tags': ['mountain-biking', 'skiing', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Fraser',
    'lat': 39.943687,
    'lng': -105.813059,
    'tags': ['CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Byers Peak',
    'lat': 39.863951,
    'lng': -105.945925,
    'tags': ['CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Hot Sulphur Springs',
    'lat': 40.067631,
    'lng': -106.101965,
    'tags': ['CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Boulder',
    'lat': 40.016574,
    'lng': -105.279364,
    'tags': ['CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Eldorado Canyon',
    'lat': 39.930869,
    'lng': -105.287732,
    'tags': ['climbing', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Flatirons',
    'lat': 39.986412,
    'lng': -105.293826,
    'tags': ['climbing', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Boulder Canyon',
    'lat': 40.002809,
    'lng': -105.404401,
    'tags': ['climbing', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Longmont',
    'lat': 40.165340,
    'lng': -105.112748,
    'tags': ['wedding', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Denver',
    'lat': 39.741557,
    'lng': -104.994216,
    'tags': ['CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Keystone',
    'lat': 39.574677,
    'lng': -105.933032,
    'tags': ['skiing', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Arapahoe Basin',
    'lat': 39.642389,
    'lng': -105.866770,
    'tags': ['skiing', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Loveland',
    'lat': 39.680977,
    'lng': -105.902819,
    'tags': ['skiing', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Breckenridge',
    'lat': 39.481729,
    'lng': -106.053881,
    'tags': ['skiing', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Breckenridge',
    'lat': 39.495772,
    'lng': -106.143489,
    'tags': ['skiing', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Silverthorne',
    'lat': 39.625600,
    'lng': -106.073451,
    'tags': ['vacation', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Aspen',
    'lat': 39.186441,
    'lng': -106.820178,
    'tags': ['skiing', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Aspen Highlands',
    'lat': 39.181119,
    'lng': -106.856227,
    'tags': ['skiing', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Snowmass',
    'lat': 39.209622,
    'lng': -106.947293,
    'tags': ['skiing', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Steamboat',
    'lat': 40.456071,
    'lng': -106.805013,
    'tags': ['skiing', 'CO'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Albuquerque',
    'lat': 35.209362,
    'lng': -106.449146,
    'tags': ['work-travel', 'NM'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Sandia Crest',
    'lat': 35.081699,
    'lng': -106.615658,
    'tags': ['hiking', 'NM'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Moriarty',
    'lat': 34.993292,
    'lng': -106.049175,
    'tags': ['NM'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Santa Fe',
    'lat': 35.683017,
    'lng': -105.942058,
    'tags': ['NM'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Oak Creek',
    'lat': 34.774323,
    'lng': -111.764812,
    'tags': ['mountain-biking', 'AZ'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Sedona',
    'lat': 34.867614,
    'lng': -111.763439,
    'tags': ['mountain-biking', 'AZ'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Grand Canyon National Park',
    'lat': 36.090716,
    'lng': -112.202377,
    'tags': ['backpacking', 'AZ'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Horshoe Bend',
    'lat': 36.878582,
    'lng': -111.512298,
    'tags': ['AZ'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Las Vegas',
    'lat': 36.156579,
    'lng': -115.154094,
    'tags': ['AZ'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Red Rocks',
    'lat': 36.161820,
    'lng': -115.447598,
    'tags': ['climbing', 'AZ'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Huntington Beach',
    'lat': 33.655896,
    'lng': -118.003448,
    'tags': ['work-travel', 'CA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Manhattan Beach',
    'lat': 33.881967,
    'lng': -118.410972,
    'tags': ['CA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Venice Beach',
    'lat': 33.982966,
    'lng': -118.471127,
    'tags': ['CA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Malibu',
    'lat': 34.036399,
    'lng': -118.686218,
    'tags': ['CA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Santa Monica',
    'lat': 34.016552,
    'lng': -118.503571,
    'tags': ['CA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Coronado',
    'lat': 32.682250,
    'lng': -117.181778,
    'tags': ['CA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'San Diego',
    'lat': 32.710276,
    'lng': -117.167359,
    'tags': ['work-travel', 'CA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'La Jolla',
    'lat': 32.880118,
    'lng': -117.234478,
    'tags': ['work-travel', 'CA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Burlingame',
    'lat': 37.573670,
    'lng': -122.348421,
    'tags': ['vacation', 'CA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'San Francisco',
    'lat': 37.769872,
    'lng': -122.417429,
    'tags': ['vacation', 'CA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Yosemite National Park',
    'lat': 37.739063,
    'lng': -119.596346,
    'tags': ['hiking', 'CA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Salt Lake City',
    'lat': 40.739947,
    'lng': -111.889094,
    'tags': ['vacation', 'UT'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Snowbird',
    'lat': 40.582904,
    'lng': -111.650828,
    'tags': ['skiing', 'UT'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Mount Olympus',
    'lat': 40.656523,
    'lng': -111.771205,
    'tags': ['hiking', 'UT'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Park City',
    'lat': 40.643741,
    'lng': -111.496562,
    'tags': ['UT'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Antelope Island State Park',
    'lat': 41.054780,
    'lng': -112.241572,
    'tags': ['UT'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Ogden',
    'lat': 41.213950,
    'lng': -111.974261,
    'tags': ['UT'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Jackson',
    'lat': 43.478935,
    'lng': -110.762919,
    'tags': ['WY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Grand Teton National Park',
    'lat': 43.784921,
    'lng': -110.727127,
    'tags': ['hiking', 'WY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Yellowstone National Park',
    'lat': 44.454685,
    'lng': -110.824920,
    'tags': ['tourism', 'WY'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Hoh Rain Forest',
    'lat': 47.860349,
    'lng': -123.935043,
    'tags': ['hiking', 'WA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Olympic National Park',
    'lat': 47.968155,
    'lng': -123.497993,
    'tags': ['hiking', 'WA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Port Angeles',
    'lat': 48.112655,
    'lng': -123.435508,
    'tags': ['vacation', 'WA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Seattle',
    'lat': 47.610975,
    'lng': -122.336532,
    'tags': ['vacation', 'WA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Bellingham',
    'lat': 48.749463,
    'lng': -122.477809,
    'tags': ['vacation', 'WA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Mount Baker',
    'lat': 48.856818,
    'lng': -121.666194,
    'tags': ['skiing', 'WA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Achorage',
    'lat': 61.208382,
    'lng': -149.895146,
    'tags': ['vacation', 'WA'],
    'albums': '', // todo
    'description': ''
  },
  {
    'name': 'Whittier',
    'lat': 60.770826,
    'lng': -148.683904,
    'tags': ['vacation', 'hiking', 'WA'],
    'albums': '', // todo
    'description': ''
  },
];



