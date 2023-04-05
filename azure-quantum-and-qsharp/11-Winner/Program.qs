namespace Winner
{
    open Microsoft.Quantum.Canon;
    open Microsoft.Quantum.Convert;
    open Microsoft.Quantum.Intrinsic;
    open Microsoft.Quantum.Measurement;
    
    @EntryPoint()
    operation HelloQ() : Unit
    {
        use qs = Qubit[4];

        ApplyToEach(H, qs);

        let bits = MeasureEachZ(qs);

        let result = ResultArrayAsInt(bits);

        Message($"{result}");
    }
}