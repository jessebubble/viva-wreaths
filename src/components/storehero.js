
const features = [
    {
      name: 'Santa on a wreath',
      description: "He knows if you've been bad or good so be good for goodness sake!",
      imageSrc: 'santa.jpg',
      imageAlt: 'Santa centerpiece on ribbon wreath',
    },
    {
      name: 'HO HO HO',
      description: "It's beggining to look a lot like Christmas so let's get decorating!",
      imageSrc: 'hohoho.jpg',
      imageAlt: 'HO HO HO christmas sign centered on ribbon wreath',
    },
    {
      name: 'Elf on a wreath',
      description: 'The elf on the wreath is watching you so be good!',
      imageSrc: 'sold.png',
      imageAlt: 'Elf centerpiece on ribbon wreath',
    },
    {
      name: 'Snowman on a wreath',
      description: "Get ready for the snowman on the wreath to melt your heart!",
      imageSrc: 'snowman.jpg',
      imageAlt: 'Snowman centerpiece on ribbon wreath',
    },
    {
      name: 'This green guy looks familiar',
      description: "This green guy looks familiar, but he's not the Grinch!",
      imageSrc: 'sold1.png',
      imageAlt: 'green monster centerpiece on ribbon wreath',
    },
    {
      name: 'Let it snowman',
      description: "Get ready for the snowman on the wreath to melt your heart!",
      imageSrc: 'letsnow.jpg',
      imageAlt: 'Snowman centerpiece on ribbon wreath',
    },
    {
      name: 'Christmas wishing',
      description: "It's the most wonderful time of the year so let's get decorating!",
      imageSrc: 'wishing.jpg',
      imageAlt: 'Christmas wishing centerpiece on ribbon wreath',
    },
    {
      name: 'Gingerbread Bakery',
      description: "Gingerbread bakery, cookies, cakes, and pies, oh my!",
      imageSrc: 'gingerbread.jpg',
      imageAlt: 'gingerbread bakery centerpiece on ribbon wreath',
    },
    {
      name: 'Santa on a wreath',
      description: "It was the night before Christmas and all through the house...",
      imageSrc: 'santaho.jpg',
      imageAlt: 'santa centerpiece on ribbon wreath',
    },
    {
      name: 'Let it snow',
      description: "It's beginning to look a lot like Christmas so let's get decorating!",
      imageSrc: 'letsnow2.jpg',
      imageAlt: 'Snowman centerpiece on ribbon wreath',
    },
    {
      name: 'The mini collection',
      description: "Our mini collection is perfect for the smaller spaces in your home or office!",
      imageSrc: 'mini.jpg',
      imageAlt: 'multiple mini wreaths',
    },
  ]
  
  export default function StoreHero() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8 -mt-10 md:-mt-16">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="font-medium text-gray-500">
              Viva Wreaths
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Holiday Collection 2022</p>
            <p className="mt-4 text-gray-500">
              Every Viva Wreath is handcrafted with love and that's why each wreath is one of a kind. 
              We deliver locally in San Antonio, ship globally and offer secure payments through Stripe and Square.
              Use our form below to order your wreath today! Want a custom wreath? Let's connect, message us for a quote.
            </p>
          </div>
  
          <div className="mt-11 grid grid-cols-1 items-start gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col-reverse">
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                </div>
                <div className="aspect-w-1 aspect-h-1 md:aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                  <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }  