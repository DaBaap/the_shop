CREATE TABLE public.products (
	product_id serial4 NOT NULL,
	product_name varchar(255) NULL,
	category_id int4 NULL,
	unit varchar(255) NULL,
	price numeric(10, 2) NULL,
	CONSTRAINT products_pkey PRIMARY KEY (product_id)
);
INSERT INTO public.products (product_name,category_id,unit,price) VALUES
	 ('Chais',1,'10 boxes x 20 bags',18.00),
	 ('Chang',1,'24 - 12 oz bottles',19.00),
	 ('Aniseed Syrup',2,'12 - 550 ml bottles',10.00),
	 ('Chef Antons Cajun Seasoning',2,'48 - 6 oz jars',22.00),
	 ('Chef Antons Gumbo Mix',2,'36 boxes',21.35),
	 ('Grandmas Boysenberry Spread',2,'12 - 8 oz jars',25.00),
	 ('Uncle Bobs Organic Dried Pears',7,'12 - 1 lb pkgs.',30.00),
	 ('Northwoods Cranberry Sauce',2,'12 - 12 oz jars',40.00),
	 ('Mishi Kobe Niku',6,'18 - 500 g pkgs.',97.00),
	 ('Ikura',8,'12 - 200 ml jars',31.00);
INSERT INTO public.products (product_name,category_id,unit,price) VALUES
	 ('Queso Cabrales',4,'1 kg pkg.',21.00),
	 ('Queso Manchego La Pastora',4,'10 - 500 g pkgs.',38.00),
	 ('Konbu',8,'2 kg box',6.00),
	 ('Tofu',7,'40 - 100 g pkgs.',23.25),
	 ('Genen Shouyu',2,'24 - 250 ml bottles',15.50),
	 ('Pavlova',3,'32 - 500 g boxes',17.45),
	 ('Alice Mutton',6,'20 - 1 kg tins',39.00),
	 ('Carnarvon Tigers',8,'16 kg pkg.',62.50),
	 ('Teatime Chocolate Biscuits',3,'10 boxes x 12 pieces',9.20),
	 ('Sir Rodneys Marmalade',3,'30 gift boxes',81.00);
INSERT INTO public.products (product_name,category_id,unit,price) VALUES
	 ('Sir Rodneys Scones',3,'24 pkgs. x 4 pieces',10.00),
	 ('Gustafs Kneckebrod',5,'24 - 500 g pkgs.',21.00),
	 ('Tunnbrod',5,'12 - 250 g pkgs.',9.00),
	 ('Guarani Fantastica',1,'12 - 355 ml cans',4.50),
	 ('NuNuCa Nui-Nougat-Creme',3,'20 - 450 g glasses',14.00),
	 ('Gumber Gummiberchen',3,'100 - 250 g bags',31.23),
	 ('Schoggi Schokolade',3,'100 - 100 g pieces',43.90),
	 ('Rassle Sauerkraut',7,'25 - 825 g cans',45.60),
	 ('Thoringer Rostbratwurst',6,'50 bags x 30 sausgs.',123.79),
	 ('Nord-Ost Matjeshering',8,'10 - 200 g glasses',25.89);
INSERT INTO public.products (product_name,category_id,unit,price) VALUES
	 ('Gorgonzola Telino',4,'12 - 100 g pkgs',12.50),
	 ('Mascarpone Fabioli',4,'24 - 200 g pkgs.',32.00),
	 ('Geitost',4,'500 g',2.50),
	 ('Sasquatch Ale',1,'24 - 12 oz bottles',14.00),
	 ('Steeleye Stout',1,'24 - 12 oz bottles',18.00),
	 ('Inlagd Sill',8,'24 - 250 g jars',19.00),
	 ('Gravad lax',8,'12 - 500 g pkgs.',26.00),
	 ('Cote de Blaye',1,'12 - 75 cl bottles',263.50),
	 ('Chartreuse verte',1,'750 cc per bottle',18.00),
	 ('Boston Crab Meat',8,'24 - 4 oz tins',18.40);
INSERT INTO public.products (product_name,category_id,unit,price) VALUES
	 ('Jacks New England Clam Chowder',8,'12 - 12 oz cans',9.65),
	 ('Singaporean Hokkien Fried Mee',5,'32 - 1 kg pkgs.',14.00),
	 ('Ipoh Coffee',1,'16 - 500 g tins',46.00),
	 ('Gula Malacca',2,'20 - 2 kg bags',19.45),
	 ('Rogede sild',8,'1k pkg.',9.50),
	 ('Spegesild',8,'4 - 450 g glasses',12.00),
	 ('Zaanse koeken',3,'10 - 4 oz boxes',9.50),
	 ('Chocolade',3,'10 pkgs.',12.75),
	 ('Maxilaku',3,'24 - 50 g pkgs.',20.00),
	 ('Valkoinen suklaa',3,'12 - 100 g bars',16.25);
INSERT INTO public.products (product_name,category_id,unit,price) VALUES
	 ('Manjimup Dried Apples',7,'50 - 300 g pkgs.',53.00),
	 ('Filo Mix',5,'16 - 2 kg boxes',7.00),
	 ('Perth Pasties',6,'48 pieces',32.80),
	 ('Tourtiare',6,'16 pies',7.45),
	 ('Pate chinois',6,'24 boxes x 2 pies',24.00),
	 ('Gnocchi di nonna Alice',5,'24 - 250 g pkgs.',38.00),
	 ('Ravioli Angelo',5,'24 - 250 g pkgs.',19.50),
	 ('Escargots de Bourgogne',8,'24 pieces',13.25),
	 ('Raclette Courdavault',4,'5 kg pkg.',55.00),
	 ('Camembert Pierrot',4,'15 - 300 g rounds',34.00);
INSERT INTO public.products (product_name,category_id,unit,price) VALUES
	 ('Sirop d arable',2,'24 - 500 ml bottles',28.50),
	 ('Tarte au sucre',3,'48 pies',49.30),
	 ('Vegie-spread',2,'15 - 625 g jars',43.90),
	 ('Wimmers gute Semmelknadel',5,'20 bags x 4 pieces',33.25),
	 ('Louisiana Fiery Hot Pepper Sauce',2,'32 - 8 oz bottles',21.05),
	 ('Louisiana Hot Spiced Okra',2,'24 - 8 oz jars',17.00),
	 ('Laughing Lumberjack Lager',1,'24 - 12 oz bottles',14.00),
	 ('Scottish Longbreads',3,'10 boxes x 8 pieces',12.50),
	 ('Gudbrandsdalsost',4,'10 kg pkg.',36.00),
	 ('Outback Lager',1,'24 - 355 ml bottles',15.00);
INSERT INTO public.products (product_name,category_id,unit,price) VALUES
	 ('Flotemysost',4,'10 - 500 g pkgs.',21.50),
	 ('Mozzarella di Giovanni',4,'24 - 200 g pkgs.',34.80),
	 ('Red Kaviar',8,'24 - 150 g jars',15.00),
	 ('Longlife Tofu',7,'5 kg pkg.',10.00),
	 ('Rhenbreu Klosterbier',1,'24 - 0.5 l bottles',7.75),
	 ('Lakkalikeeri',1,'500 ml ',18.00),
	 ('Original Frankfurter gr?ne Soae',2,'12 boxes',13.00);
