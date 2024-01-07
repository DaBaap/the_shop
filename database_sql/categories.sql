CREATE TABLE public.categories (
	category_id serial4 NOT NULL,
	category_name varchar(255) NULL,
	description varchar(255) NULL,
	CONSTRAINT categories_pkey PRIMARY KEY (category_id)
);

INSERT INTO public.categories (category_name,description) VALUES
	 ('Beverages','Soft drinks, coffees, teas, beers, and ales'),
	 ('Condiments','Sweet and savory sauces, relishes, spreads, and seasonings'),
	 ('Confections','Desserts, candies, and sweet breads'),
	 ('Dairy Products','Cheeses'),
	 ('Grains/Cereals','Breads, crackers, pasta, and cereal'),
	 ('Meat/Poultry','Prepared meats'),
	 ('Produce','Dried fruit and bean curd'),
	 ('Seafood','Seaweed and fish');
