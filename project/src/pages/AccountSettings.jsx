const AccountSettings = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800">Account Settings</h2>
        <div className="flex items-center gap-4 mt-6">
          <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-full border-2 border-purple-500" />
          <div>
            <h3 className="text-lg font-semibold">Marry Doe</h3>
            <p className="text-gray-500">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy eirmod tempor.
        </p>
      </div>
    );
  };
  
  export default AccountSettings;
  