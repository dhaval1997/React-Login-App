const RegisteredUserDetails = () => {
  return (
    <div className="flex flex-col px-4 py-1 border border-gray-300">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-xs font-thin border rounded border-gray-400">
              <thead className="border-b border-gray-400 font-medium ">
                <tr>
                  <th scope="col" className="px-6 py-2">
                    Subject Title
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Start Date
                  </th>
                  <th scope="col" className="px-6 py-2">
                    End Date
                  </th>
                  <th scope="col" className="px-6 py-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400 ">
                  <td className="whitespace-nowrap px-6 py-2 font-medium">
                    SNP-ACTh(1-39)
                  </td>
                  <td className="whitespace-nowrap px-6 py-2">09-Feb-2024</td>
                  <td className="whitespace-nowrap px-6 py-2">09-Feb-2024</td>
                  <td className="whitespace-nowrap px-6 py-2">
                    show study details
                  </td>
                </tr>
                <tr className="border-b border-gray-400 ">
                  <td className="whitespace-nowrap px-6 py-2 font-medium">
                    SNP-ACTh(1-39)
                  </td>
                  <td className="whitespace-nowrap px-6 py-2">09-Feb-2024</td>
                  <td className="whitespace-nowrap px-6 py-2">09-Feb-2024</td>
                  <td className="whitespace-nowrap px-6 py-2">
                    show study details
                  </td>
                </tr>
                <tr className="border-b border-gray-400 ">
                  <td className="whitespace-nowrap px-6 py-2 font-medium"></td>
                  <td className="whitespace-nowrap px-6 py-2"></td>
                  <td className="whitespace-nowrap px-6 py-2"></td>
                  <td className="whitespace-nowrap px-6 py-2">Assign new study</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisteredUserDetails;
