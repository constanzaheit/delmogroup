export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Delmo Group</h3>
            <p className="text-gray-300">Changing the Landscape Through Sustainable Innovation</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-eucalyptus">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-white">Australia</p>
                <p className="text-gray-300 text-sm">Ground Floor,</p>
                <p className="text-gray-300 text-sm">465 Victoria Avenue</p>
                <p className="text-gray-300 text-sm">Chatswood NSW 2067</p>
                <p className="text-gray-300 text-sm">Tel. +61 2 9844 5809</p>
                <p className="text-gray-300 text-sm">Email: info@delmogroup.com</p>
              </div>
              <div>
                <p className="font-medium text-white">Argentina</p>
                <p className="text-gray-300 text-sm">Parera 47, 4th floor</p>
                <p className="text-gray-300 text-sm">Recoleta, CABA</p>
                <p className="text-gray-300 text-sm">Argentina</p>
                <p className="text-gray-300 text-sm">Tel. +54 11 4814 1505</p>
                <p className="text-gray-300 text-sm">Email: info@delmogroup.com</p>
              </div>
            </div>
          </div>
          
          <div className="md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 Delmo Group.<br />
              Environmental leadership through<br />
              responsible development.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
