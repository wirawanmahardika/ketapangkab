import useTitle from "../hooks/useTitle";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import DATAS from "../utils/datas";
import { IoMdSave } from "react-icons/io";
import { WiStars } from "react-icons/wi";

const PengaturanBeranda = () => {
  useTitle("Halaman Pengaturan");
  const [leftPhoto, setLeftPhoto] = useState<string | null>(null);
  const [rightPhoto, setRightPhoto] = useState<string | null>(null);
  const [leftName, setLeftName] = useState("");
  const [leftPosition, setLeftPosition] = useState("");
  const [rightName, setRightName] = useState("");
  const [rightPosition, setRightPosition] = useState("");

  const handleLeftPhotoChange = (e: any) => {
    if (e.target.files[0]) {
      setLeftPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleRightPhotoChange = (e: any) => {
    if (e.target.files[0]) {
      setRightPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("tes submit");
  };

  const handleDeleteLeftPhoto = () => {
    setLeftPhoto(null);
  };

  return (
    <div className="px-3 py-10">
      <div className="shadow bg-white rounded p-5 flex flex-col gap-y-4">
        <div className="flex items-center justify-between w-full">
          <span className="font-bold text-xl">Edit Foto Pejabat</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-3xl p-6">
              <div className="relative mb-4 bg-gray-100 h-64 flex items-center justify-center">
                {leftPhoto ? (
                  <>
                    <img
                      src={leftPhoto}
                      alt="Preview"
                      className="h-full object-contain"
                    />

                    <button
                      type="button"
                      className="absolute top-2 right-2 cursor-pointer"
                    >
                      <WiStars size={30} className="text-blue-400" />
                    </button>
                  </>
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="w-full h-full bg-gray-300 rounded-2xl flex items-center justify-center">
                      {!leftPhoto && <FaUser className="w-40 h-40" />}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between gap-6">
                <label className="block w-full mb-4">
                  <button
                    type="button"
                    disabled={!!leftPhoto}
                    className="disabled:bg-gray-300! disabled:cursor-not-allowed text-white cursor-pointer w-full py-2 rounded text-center flex items-center justify-center"
                    style={{ backgroundColor: DATAS.theme.color_deep }}
                    onClick={() =>
                      document.getElementById("leftPhotoInput")?.click()
                    }
                  >
                    <IoCloudUploadOutline size={20} className="mr-4" />
                    Unggah Foto
                  </button>

                  <input
                    id="leftPhotoInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    required
                    onChange={handleLeftPhotoChange}
                  />
                </label>
                {leftPhoto && (
                  <button
                    type="button"
                    onClick={handleDeleteLeftPhoto}
                    className="ml-2 bg-red-500 text-white rounded w-10 h-10 flex items-center justify-center cursor-pointer"
                  >
                    <MdDeleteForever size={25} />
                  </button>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-1">Nama</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Masukkan Nama"
                  required
                  value={leftName}
                  onChange={(e) => setLeftName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-1">Jabatan</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Masukkan Jabatan"
                  required
                  value={leftPosition}
                  onChange={(e) => setLeftPosition(e.target.value)}
                />
              </div>
            </div>

            <div className="bg-gray-100 rounded-3xl p-6">
              <div className="relative mb-4 bg-gray-100 h-64 flex items-center justify-center">
                {rightPhoto ? (
                  <>
                    <img
                      src={rightPhoto}
                      alt="Preview"
                      className="h-full object-contain"
                    />

                    <button
                      type="button"
                      className="absolute top-2 right-2 cursor-pointer"
                    >
                      <WiStars size={30} className="text-blue-400" />
                    </button>
                  </>
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="w-full h-full bg-gray-300 rounded-2xl flex items-center justify-center">
                      {!rightPhoto && <FaUser className="w-40 h-40" />}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between gap-6">
                <label className="block w-full mb-4">
                  <button
                    type="button"
                    disabled={!!rightPhoto}
                    className="disabled:bg-gray-300! disabled:cursor-not-allowed text-white w-full cursor-pointer py-2 rounded text-center flex items-center justify-center"
                    style={{ backgroundColor: DATAS.theme.color_deep }}
                    onClick={() =>
                      document.getElementById("rightPhotoInput")?.click()
                    }
                  >
                    <IoCloudUploadOutline size={20} className="mr-4" />
                    Unggah Foto
                  </button>
                  <input
                    id="rightPhotoInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    required
                    onChange={handleRightPhotoChange}
                  />
                </label>
                {rightPhoto && (
                  <button
                    type="button"
                    onClick={() => setRightPhoto(null)}
                    className="ml-2 bg-red-500 text-white rounded w-10 h-10 flex items-center justify-center cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-1">Nama</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value={rightName}
                  required
                  onChange={(e) => setRightName(e.target.value)}
                  placeholder="Masukkan nama"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-1">Jabatan</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value={rightPosition}
                  required
                  onChange={(e) => setRightPosition(e.target.value)}
                  placeholder="Masukkan jabatan"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="text-white text-xl px-4 py-2 flex gap-3 rounded hover:bg-blue-700"
              style={{ backgroundColor: DATAS.theme.color_deep }}
            >
              <IoMdSave size={25} />
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PengaturanBeranda;
