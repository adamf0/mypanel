import React, { useState } from "react";
import {
  faChevronLeft,
  faCopy,
  faDashboard,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import Stepper from "./Stepper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuid } from "uuid";
import { StepState } from "./StepState";
import Error from "../Share/Erorr";
import BreadCrumb from "./BreadCrumb";
import StackAvatars from "./StackAvatars";
import ViewerFile from "./ViewerFile";

function PenelitianInternalAdd() {
  const fokusPenelitian = [
    {
      icon: <FontAwesomeIcon icon={faDashboard} size="sm" />,
      text: "Teknologi Informasi dan Komunikasi (TIK)",
    },
    {
      icon: <FontAwesomeIcon icon={faDashboard} size="sm" />,
      text: "Teknologi untuk Peningkatan Konten TIK",
    },
    {
      icon: <FontAwesomeIcon icon={faDashboard} size="sm" />,
      text: "Teknologi dan konten untuk data informasi geospasial dan inderaja",
    },
  ];
  const rumpunIlmu = [
    {
      icon: <FontAwesomeIcon icon={faDashboard} size="sm" />,
      text: "ILMU TEKNIK",
    },
    {
      icon: <FontAwesomeIcon icon={faDashboard} size="sm" />,
      text: "TEKNIK ELEKTRO DAN INFORMATIKA",
    },
    {
      icon: <FontAwesomeIcon icon={faDashboard} size="sm" />,
      text: "Teknologi Informasi",
    },
  ];
  const dosen = [
    {
      ref: "0409098601",
      nama: "ARIES MAESYA - ILMU KOMPUTER (MIPA)",
    },
    {
      ref: "0409098601",
      nama: "ARIES MAESYA - ILMU KOMPUTER (MIPA)",
    },
    {
      ref: "0409098601",
      nama: "ARIES MAESYA - ILMU KOMPUTER (MIPA)",
    },
    {
      ref: "0409098601",
      nama: "ARIES MAESYA - ILMU KOMPUTER (MIPA)",
    },
  ];
  const mahasiswa = [
    {
      ref: "065117251",
      nama: "Adam Furqon",
    },
    {
      ref: "065117251",
      nama: "Adam Furqon",
    },
    {
      ref: "065117251",
      nama: "Adam Furqon",
    },
    {
      ref: "065117251",
      nama: "Adam Furqon",
    },
  ];
  const lainnya = [
    {
      ref: null,
      nama: "Orang 1",
    },
    {
      ref: null,
      nama: "Orang 2",
    },
    {
      ref: "065117251",
      nama: "Orang 3",
    },
    {
      ref: null,
      nama: "Orang 4",
    },
  ];

  const [steps, setStep] = useState([
    {
      title: "Judul",
      description: (
        <div className="flex flex-wrap justify-between">
          <p className="grow w-[6.25rem] leading-loose whitespace-nowrap overflow-hidden overflow-ellipsis">
            PENGEMBANGAN MODEL INTERNET of THINGS (IoT) BASED STEM (IoT-STEM)
            DALAM PENDIDIKAN GEOSAINS
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
          <div className="inline-flex gap-2">
            <button className="text-[#77099D]">
              <FontAwesomeIcon icon={faCopy} size="sm" />
            </button>
            <button className="text-orange-700">
              <FontAwesomeIcon icon={faPencilAlt} size="sm" />
            </button>
          </div>
        </div>
      ),
      state: StepState.SUCCESS,
    },
    {
      title: "Kategori Skema & Tanggal Penelitian",
      description: (
        <div className="flex flex-wrap">
          <p className="grow">asasas</p>
          <button className="text-orange-700">
            <FontAwesomeIcon icon={faPencilAlt} size="sm" />
          </button>
        </div>
      ),
      state: StepState.SUCCESS,
    },
    {
      title: "Fokus Penelitian & Lama Kegiatan",
      description: (
        <BreadCrumb
          message="Belum ada data fokus penelitian & lama kegiatan"
          list={fokusPenelitian}
        >
          <button className="text-orange-700 text-left ml-3">
            <FontAwesomeIcon icon={faPencilAlt} size="sm" />
          </button>
        </BreadCrumb>
      ),
      state: StepState.SUCCESS,
    },
    {
      title: "Rumpun Ilmu",
      description: (
        <BreadCrumb
          message="Belum ada data fokus penelitian & lama kegiatan"
          list={rumpunIlmu}
        >
          <button className="text-orange-700 text-left ml-3">
            <FontAwesomeIcon icon={faPencilAlt} size="sm" />
          </button>
        </BreadCrumb>
      ),
      state: StepState.SUCCESS,
    },
    {
      title: "Anggota Dosen",
      description: (
        <div className="flex gap-4">
          <StackAvatars
            list={dosen}
            message="belum ada dosen yg sebagai anggota"
          />
          <button className="text-orange-700">
            <FontAwesomeIcon icon={faPencilAlt} size="sm" />
          </button>
        </div>
      ),
      state: StepState.SUCCESS,
    },
    {
      title: "Anggota Mahasiswa",
      description: (
        <div className="flex gap-4">
          <StackAvatars
            list={mahasiswa}
            message="belum ada mahasiswa yg sebagai anggota"
          />
          <button className="text-orange-700">
            <FontAwesomeIcon icon={faPencilAlt} size="sm" />
          </button>
        </div>
      ),
      state: StepState.SUCCESS,
    },
    {
      title: "Anggota Lainnya",
      description: (
        <div className="flex gap-4">
          <StackAvatars
            list={lainnya}
            message="belum ada non-dosen / dosen kampus luar unpak sebagai anggota"
          />
          <button className="text-orange-700">
            <FontAwesomeIcon icon={faPencilAlt} size="sm" />
          </button>
        </div>
      ),
      state: StepState.SUCCESS,
    },
    {
      title: "Unggak Berkas Proposal",
      description: (
        <div className="mt-2 flex items-conter gap-4">
          <ViewerFile
            nameFile="asasasasasasasasasasas.jpg"
            url="https://google.com"
          >
            <button className="text-orange-700">
              <FontAwesomeIcon icon={faPencilAlt} size="sm" />
            </button>
          </ViewerFile>
        </div>
      ),
      state: StepState.SUCCESS,
    },
    {
      title: "Luaran Wajib",
      description: (
        <div className="flex flex-wrap justify-center">
          <p className="grow text-[clamp(.65rem, .5rem + 1vw, 1rem)] break-all leading-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed
            porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt
            vehicula. Fusce sit amet dui tellus.
          </p>
          <button className="text-orange-700">
            <FontAwesomeIcon icon={faPencilAlt} size="sm" />
          </button>
        </div>
      ),
      state: StepState.DANGER,
    },
    {
      title: "Luaran Tambahan",
      description: (
        <div className="flex flex-wrap justify-center">
          <p className="grow text-[clamp(.65rem, .5rem + 1vw, 1rem)] break-all leading-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed
            porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt
            vehicula. Fusce sit amet dui tellus.
          </p>
          <button className="text-orange-700">
            <FontAwesomeIcon icon={faPencilAlt} size="sm" />
          </button>
        </div>
      ),
      state: StepState.WARNING,
    },
    {
      title: "RAB",
      description: (
        <div className="flex flex-wrap justify-center">
          <p className="grow text-[clamp(.65rem, .5rem + 1vw, 1rem)] break-all leading-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed
            porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt
            vehicula. Fusce sit amet dui tellus.
          </p>
          <button className="text-orange-700">
            <FontAwesomeIcon icon={faPencilAlt} size="sm" />
          </button>
        </div>
      ),
      state: StepState.DANGER,
    },
    {
      title: "Mitra",
      description: (
        <div className="flex flex-wrap justify-center">
          <p className="grow text-[clamp(.65rem, .5rem + 1vw, 1rem)] break-all leading-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed
            porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt
            vehicula. Fusce sit amet dui tellus.
          </p>
          <button className="text-orange-700">
            <FontAwesomeIcon icon={faPencilAlt} size="sm" />
          </button>
        </div>
      ),
      state: StepState.LOADING,
    },
    {
      title: "Dokumen Kontrak",
      description: (
        <div className="flex flex-wrap justify-center">
          <p className="grow text-[clamp(.65rem, .5rem + 1vw, 1rem)] break-all leading-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed
            porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt
            vehicula. Fusce sit amet dui tellus.
          </p>
          <button className="text-orange-700">
            <FontAwesomeIcon icon={faPencilAlt} size="sm" />
          </button>
        </div>
      ),
      state: null,
      isLast: true,
    },
  ]);
  // const [steps, setStep] = useState([]);

  return (
    <div className="card h-auto flex flex-col">
      <div className="flex flex-col gap-3">
        <button className="cursor-pointer text-[#676767] hover:text-black mr-auto">
          <FontAwesomeIcon icon={faChevronLeft} />
          Kembali
        </button>

        <Stepper>
          {steps.length == 0 ? (
            <div className="grow text-center mx-auto">
              <Error />
            </div>
          ) : (
            steps.map((step, index) => (
              <Stepper.Item
                key={uuid()}
                title={step?.title}
                description={step?.description}
                state={step?.state}
                isLast={index == steps.length - 1}
              ></Stepper.Item>
            ))
          )}
        </Stepper>
      </div>
    </div>
  );
}

export default PenelitianInternalAdd;
