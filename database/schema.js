module.exports.userSchema =
`CREATE TABLE IF NOT EXISTS users (
  id INTEGER NOT NULL,
  name VARCHAR(50) NULL DEFAULT NULL,
  avatar VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);`


module.exports.apartmentSchema =
`CREATE TABLE IF NOT EXISTS apartments (
  id INTEGER NOT NULL,
  address VARCHAR(100) NULL DEFAULT NULL,
  owned_by_user_id INTEGER(5),
  PRIMARY KEY (id)
);`

  
module.exports.reviewSchema =
`CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER NOT NULL,
  date VARCHAR(15) NULL DEFAULT NULL,
  text VARCHAR(500) NULL DEFAULT NULL,
  rating DECIMAL(5) NULL DEFAULT NULL,
  user_id INTEGER(5) NULL DEFAULT NULL,
  apartment_id INTEGER(10),
  has_response BINARY NULL DEFAULT NULL,
  owner_response VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);`


module.exports.apartmentAddresses = [
  '777 Brockton Avenue Abington MA 2351','30 Memorial Drive Avon MA 2322','250 Hartford Avenue Bellingham MA 2019','700 Oak Street Brockton MA 2301','66-4 Parkhurst Rd Chelmsford MA 1824','591 Memorial Dr Chicopee MA 1020','55 Brooksby Village Way Danvers MA 1923','137 Teaticket Hwy East Falmouth MA 2536','42 Fairhaven Commons Way Fairhaven MA 2719','374 William S Canning Blvd Fall River MA 2721','121 Worcester Rd, Framingham MA 1701','677 Timpany Blvd, Gardner MA 1440','337 Russell St, Hadley MA 1035','295 Plymouth Street, Halifax MA 2338','1775 Washington St, Hanover MA 2339','280 Washington Street, Hudson MA 1749','20 Soojian Dr, Leicester MA 1524','11 Jungle Road, Leominster MA 1453','301 Massachusetts Ave, Lunenburg MA 1462','780 Lynnway, Lynn MA 1905','70 Pleasant Valley Street, Methuen MA 1844','830 Curran Memorial Hwy, North Adams MA 1247','1470 S Washington St, North Attleboro MA 2760','506 State Road, North Dartmouth MA 2747','742 Main Street, North Oxford MA 1537','72 Main St, North Reading MA 1864','200 Otis Street, Northborough MA 1532','180 North King Street, Northhampton MA 1060','555 East Main St, Orange MA 1364','555 Hubbard Ave-Suite 12, Pittsfield MA 1201','300 Colony Place, Plymouth MA 2360','301 Falls Blvd, Quincy MA 2169','36 Paramount Drive, Raynham MA 2767','450 Highland Ave, Salem MA 1970','1180 Fall River Avenue, Seekonk MA 2771','1105 Boston Road, Springfield MA 1119','100 Charlton Road, Sturbridge MA 1566','262 Swansea Mall Dr, Swansea MA 2777','333 Main Street, Tewksbury MA 1876','550 Providence Hwy, Walpole MA 2081','352 Palmer Road, Ware MA 1082','3005 Cranberry Hwy Rt 6 28, Wareham MA 2538','250 Rt 59, Airmont NY 10901','141 Washington Ave Extension, Albany NY 12205','13858 Rt 31 W, Albion NY 14411','2055 Niagara Falls Blvd, Amherst NY 14228','101 Sanford Farm Shpg Center, Amsterdam NY 12010','297 Grant Avenue, Auburn NY 13021','4133 Veterans Memorial Drive, Batavia NY 14020','6265 Brockport Spencerport Rd, Brockport NY 14420','5399 W Genesse St, Camillus NY 13031','3191 County rd 10, Canandaigua NY 14424','30 Catskill, Catskill NY 12414','161 Centereach Mall, Centereach NY 11720','3018 East Ave, Central Square NY 13036','100 Thruway Plaza, Cheektowaga NY 14225','8064 Brewerton Rd, Cicero NY 13039','5033 Transit Road, Clarence NY 14031','3949 Route 31, Clay NY 13041','139 Merchant Place, Cobleskill NY 12043','85 Crooked Hill Road, Commack NY 11725','872 Route 13, Cortlandville NY 13045','279 Troy Road, East Greenbush NY 12061','2465 Hempstead Turnpike, East Meadow NY 11554','6438 Basile Rowe, East Syracuse NY 13057','25737 US Rt 11, Evans Mills NY 13637','901 Route 110, Farmingdale NY 11735','2400 Route 9, Fishkill NY 12524','10401 Bennett Road, Fredonia NY 14063','1818 State Route 3, Fulton NY 13069','4300 Lakeville Road, Geneseo NY 14454','990 Route 5 20, Geneva NY 14456','311 RT 9W, Glenmont NY 12077','200 Dutch Meadows Ln, Glenville NY 12302','100 Elm Ridge Center Dr, Greece NY 14626','1549 Rt 9, Halfmoon NY 12065','5360 Southwestern Blvd, Hamburg NY 14075','103 North Caroline St, Herkimer NY 13350','1000 State Route 36, Hornell NY 14843','1400 County Rd 64, Horseheads NY 14845','135 Fairgrounds Memorial Pkwy, Ithaca NY 14850','2 Gannett Dr, Johnson City NY 13790','233 5th Ave Ext, Johnstown NY 12095','601 Frank Stottile Blvd, Kingston NY 12401','350 E Fairmount Ave, Lakewood NY 14750','4975 Transit Rd, Lancaster NY 14086','579 Troy-Schenectady Road, Latham NY 12110','5783 So Transit Road, Lockport NY 14094','7155 State Rt 12 S, Lowville NY 13367','425 Route 31, Macedon NY 14502','3222 State Rt 11, Malone NY 12953','200 Sunrise Mall, Massapequa NY 11758','43 Stephenville St, Massena NY 13662','750 Middle Country Road, Middle Island NY 11953','470 Route 211 East, Middletown NY 10940','3133 E Main St, Mohegan Lake NY 10547','288 Larkin, Monroe NY 10950','41 Anawana Lake Road, Monticello NY 12701','4765 Commercial Drive, New Hartford NY 13413','1201 Rt 300, Newburgh NY 12550'
]