import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

interface SearchParamProps {
  params: Promise<{
    userId: string;
  }>;
}

const Register = async ({ params }: SearchParamProps) => {
  const resolvedUserId = await params;
  const { userId } = resolvedUserId;
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/gifs/mmu.gif"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-0 h-15 w-fit"
            unoptimized
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 MMU Dispensary</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
