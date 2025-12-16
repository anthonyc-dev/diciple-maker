import ScrollStack, { ScrollStackItem } from "../ScrollStack";

const BibleVerse = () => {
  return (
    <div>
      <ScrollStack>
        <ScrollStackItem>
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold mb-4">Matthew 28:19-20</h2>
            <p className="text-xl">
              "Therefore go and make disciples of all nations, baptizing them in
              the name of the Father and of the aSon and of the Holy Spirit, and
              teaching them to obey everything I have commanded you. And surely I
              am with you always, to the very end of the age."
            </p>
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold mb-4">2 Timothy 2:2</h2>
            <p className="text-xl">
              "And the things you have heard me say in the presence of many
              witnesses entrust to reliable people who will also be qualified to
              teach others."
            </p>
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold mb-4">John 13:34-35</h2>
            <p className="text-xl">
              "A new command I give you: Love one another. As I have loved you,
              so you must love one another. By this everyone will know that you
              are my disciples, if you love one another."
            </p>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
};

export default BibleVerse;
