import AddTeamCart from "../../components/team/AddTeamCart";
import TeamCart from "../../components/team/TeamCart";
import { teamItems } from "../../initials";

const TeamPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-p-6">
        {/* add cart */}
        <div className="md:hidden">
          <AddTeamCart />
        </div>

        {teamItems.map((item) => (
          <div>
            <TeamCart item={item} />
          </div>
        ))}

        {/* add cart */}
        <div className="max-md:hidden">
          <AddTeamCart />
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
